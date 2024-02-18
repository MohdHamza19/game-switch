import { Component } from '@angular/core';

@Component({
  selector: 'widget-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrl: './advert-card.component.scss'
})
export class AdvertCardComponent {
  cards: Array<any> = [];

  ngOnInit() {
    this.cards = [
      { title: 'Card Title 1', location: 'Location 1', condition: 'Condition 1', price: 'Price 1' },
      { title: 'Card Title 2', location: 'Location 2', condition: 'Condition 2', price: 'Price 2' },
      { title: 'Card Title 3', location: 'Location 3', condition: 'Condition 3', price: 'Price 3' },
      { title: 'Card Title 4', location: 'Location 4', condition: 'Condition 4', price: 'Price 4' },
      { title: 'Card Title 5', location: 'Location 5', condition: 'Condition 5', price: 'Price 5' },
      { title: 'Card Title 6', location: 'Location 6', condition: 'Condition 6', price: 'Price 6' }
    ];
  }
}
