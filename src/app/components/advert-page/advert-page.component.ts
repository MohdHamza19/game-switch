import { Component } from '@angular/core';

@Component({
  selector: 'app-advert-page',
  templateUrl: './advert-page.component.html',
  styleUrl: './advert-page.component.scss'
})
export class AdvertPageComponent {
  card: any = {};

  constructor() { }

  ngOnInit(){
    this.card = history.state.data || null;
    console.log(this.card);
    
  }
}
