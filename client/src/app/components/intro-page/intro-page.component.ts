import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intro-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './intro-page.component.html',
  styleUrl: './intro-page.component.css'
})

export class IntroPageComponent{
  userName: string = 'Stranger';
  constructor(private router: Router, private apiService: ApiService) {}

  navigateToMain() {
    this.router.navigate(['/main']);
  }

  initConnection(){
    this.apiService.initSocket(this.userName);
  }
}
