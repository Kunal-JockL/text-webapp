import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Message } from '../../../models/message.model';
import { ChatService } from '../../../services/chat-service.service';
import { ChatInputBoxComponent } from "../../general/chat-input-box/chat-input-box.component";
import { MessageItemComponent } from "./message-item/message-item.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-chat-div',
  standalone: true,
  imports: [ChatInputBoxComponent, MessageItemComponent, CommonModule],
  templateUrl: './chat-div.component.html',
  styleUrl: './chat-div.component.css'
})

export class ChatDivComponent implements OnInit{
  messages: Message [] = [];
  private prevMessageCount: number = 0;

  constructor(private chatService: ChatService) {}

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  ngOnInit() {
    this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
    });
  }

  ngAfterViewChecked() {
    if (this.messages.length !== this.prevMessageCount) {
      setTimeout(() => {
        this.scrollToBottom();
        this.prevMessageCount = this.messages.length;
      }, 100);
    }
  }

  scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom', err);
    }
  }
}
