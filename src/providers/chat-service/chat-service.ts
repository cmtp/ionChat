import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private URL = 'http://localhost:8080';
  private socket;

  constructor() {
    console.log('Hello ChatServiceProvider Provider');
  }

  sendMessage(message) {
    this.socket.emit('add-message', message);
    console.log("MESSAGE SENT");
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.URL);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    });
    return observable;
  }
}
