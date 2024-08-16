import { Component } from '@angular/core';
import { ChatDivComponent } from './chat-div/chat-div.component';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [ChatDivComponent, NavBarComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent {

}
