import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../../models/message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent implements OnInit{
  @Input() message!: Message;
  user: string = 'Alice';
  isYou: boolean = false;
  time: string = '';
  
  ngOnInit(): void {
   //console.log(this.message);
    if (this.user === this.message.sender){
      this.isYou = true;
    }
    this.time = this.getTime();
  }

  getTime(): string {
    let hour: number = this.message.timestamp.getHours();
    let min: number = this.message.timestamp.getMinutes();

    const hourStr = hour < 10 ? '0' + hour : hour.toString();
    const minStr = min < 10 ? '0' + min : min.toString();
    const timeStr = hourStr + ':' + minStr;
    return timeStr;
  }

}
