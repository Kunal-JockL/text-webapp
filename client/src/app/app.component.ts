import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatPageComponent } from "./components/chat-page/chat-page.component";
import { IntroPageComponent } from './components/intro-page/intro-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatPageComponent, IntroPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
