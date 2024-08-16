import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messages: Message[] = [];
  private messagesSubject = new BehaviorSubject<Message[]>(this.messages);

  getMessages() {
    return this.messagesSubject.asObservable();
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }

  clearMessages() {
    this.messages = [];
    this.messagesSubject.next(this.messages);
  }
}
