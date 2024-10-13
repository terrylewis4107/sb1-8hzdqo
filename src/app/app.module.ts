import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { ConferenceComponent } from './conference/conference.component'
import { AuthService } from './services/auth.service'
import { WebRTCService } from './services/webrtc.service'
import { ChatService } from './services/chat.service'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, LoginComponent, ConferenceComponent],
  providers: [AuthService, WebRTCService, ChatService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}