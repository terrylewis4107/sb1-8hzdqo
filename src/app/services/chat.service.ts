import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages = new BehaviorSubject<string[]>([]);

  sendMessage(message: string) {
    const currentMessages = this.messages.value;
    this.messages.next([...currentMessages, message]);
  }
}