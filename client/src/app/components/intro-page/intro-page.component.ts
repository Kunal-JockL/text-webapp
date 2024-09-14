import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { io } from "socket.io-client";

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent{
  constructor(private router: Router) {}

  navigateToMain() {
    this.router.navigate(['/main']);
  }

  initSocket(){
    const socket = io('http://localhost:5000', { transports : ['websocket'] });
    console.log(socket);
    return socket;
  }
}
