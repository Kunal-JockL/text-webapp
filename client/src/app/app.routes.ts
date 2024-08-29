import { Routes } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { IntroPageComponent } from './components/intro-page/intro-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'intro', component: IntroPageComponent },
    { path: 'main', component: ChatPageComponent },
    { path: '**', component: IntroPageComponent }
];
