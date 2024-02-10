import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  steps = [
    { title: 'Step 1', description: 'Create an account' },
    { title: 'Step 2', description: 'Search for your desired game in your area' },
    { title: 'Step 3', description: 'Create an ad if you can\'t find it' }
  ];
}
