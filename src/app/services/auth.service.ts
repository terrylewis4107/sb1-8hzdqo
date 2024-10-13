import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as mssql from 'mssql';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server.database.windows.net',
    database: 'your_database',
    options: {
      encrypt: true,
      trustServerCertificate: false
    }
  };

  login(username: string, password: string): Observable<boolean> {
    return from(mssql.connect(this.config)).pipe(
      map(async (pool) => {
        const result = await pool.request()
          .input('username', mssql.VarChar, username)
          .input('password', mssql.VarChar, password)
          .query('SELECT COUNT(*) as count FROM Users WHERE Username = @username AND Password = @password');
        
        await pool.close();
        return result.recordset[0].count > 0;
      }),
      catchError((error) => {
        console.error('Database connection error:', error);
        return from(Promise.resolve(false));
      })
    );
  }
}