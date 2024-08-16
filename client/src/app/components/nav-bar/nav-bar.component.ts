import { Component } from '@angular/core';
import { LogoFullComponent } from "../general/logo-full/logo-full.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LogoFullComponent, FontAwesomeModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  faArrowRightFromBracket = faArrowRightFromBracket;
}
