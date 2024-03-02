import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'widget-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrl: './advert-card.component.scss'
})
export class AdvertCardComponent {
  @Input() cards: Array<any> = [];
  @Output() idEmitter: EventEmitter<number> = new EventEmitter<number>();

  viewAd(id: number){
    this.idEmitter.emit(id);
  }
}
