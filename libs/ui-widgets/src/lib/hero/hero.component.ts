import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input()
  steps: { title: string; description: string; }[] = [];
}
