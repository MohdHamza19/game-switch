import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'widget-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrl: './advert-card.component.scss'
})
export class AdvertCardComponent {
  @Input() cards: Array<any> = [];
  @Output() idEmitter: EventEmitter<number> = new EventEmitter<number>();
  isLoading = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cards']) {
      if(changes['cards'].currentValue.length === 0){
        this.isLoading = true;
      } else {
        this.isLoading = false; 
      }
    }
  }
  
  viewAd(id: number){
    this.idEmitter.emit(id);
  }
}
