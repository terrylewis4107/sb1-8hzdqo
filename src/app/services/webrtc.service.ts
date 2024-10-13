import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRTCService {
  participantsUpdated = new Subject<any[]>();
  private mockParticipants = [
    { id: '1', name: 'User 1' },
    { id: '2', name: 'User 2' },
    { id: '3', name: 'User 3' }
  ];

  initializeConnection() {
    // Simulate connection initialization
    setTimeout(() => {
      this.participantsUpdated.next(this.mockParticipants);
    }, 1000);
  }

  startScreenShare() {
    console.log('Screen sharing started');
    // Implement actual screen sharing logic when possible
  }

  requestRemoteControl(participantId: string) {
    console.log(`Remote control requested for participant ${participantId}`);
    // Implement actual remote control logic when possible
  }
}