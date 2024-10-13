import { Component, OnInit } from '@angular/core';
import { WebRTCService } from '../services/webrtc.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'ns-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  participants: any[] = [];
  messages: string[] = [];
  newMessage: string = '';

  constructor(
    private webRTCService: WebRTCService,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    this.webRTCService.initializeConnection();
    this.webRTCService.participantsUpdated.subscribe((participants) => {
      this.participants = participants;
    });
    this.chatService.messages.subscribe((messages) => {
      this.messages = messages;
    });
  }

  startScreenShare() {
    this.webRTCService.startScreenShare();
  }

  requestRemoteControl(participantId: string) {
    this.webRTCService.requestRemoteControl(participantId);
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}