import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})
export class IntroPageComponent{
  constructor(private router: Router, private apiService: ApiService) {}

  navigateToMain() {
    this.router.navigate(['/main']);
  }

  initConnection(){
    this.apiService.initSocket();
  }
}
