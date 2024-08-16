import { Component , OnInit} from '@angular/core';
import { Message } from '../../../models/message.model';
import { MessagesList } from '../../../models/message-list';
import { ChatService } from '../../../services/chat-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chat-input-box',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './chat-input-box.component.html',
  styleUrl: './chat-input-box.component.css'
})
export class ChatInputBoxComponent implements OnInit{
  constructor(private chatService: ChatService){}

  faImage = faImage;
  faPaperPlane = faPaperPlane;

  MessagesList: Message[] = MessagesList;

  ngOnInit(): void {
      
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async stub() {
    for (let i = 0; i < this.MessagesList.length; i++) {
      //console.log(this.MessagesList[i]);
      this.chatService.addMessage(this.MessagesList[i]);
      await this.delay(Math.floor(Math.random()*1000)+500);
      //await this.delay(Math.floor(1000));
    }
  }
  
}
