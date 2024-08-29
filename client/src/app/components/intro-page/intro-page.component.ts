import { Component} from '@angular/core';
import { Router } from '@angular/router';

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

  // stub1(){
  //   console.log("yes");
  // }
}
