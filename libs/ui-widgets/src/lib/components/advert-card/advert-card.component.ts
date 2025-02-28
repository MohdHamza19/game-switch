import { Component, computed, effect, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'widget-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrl: './advert-card.component.scss'
})
export class AdvertCardComponent {
  @Output() idEmitter: EventEmitter<number> = new EventEmitter<number>();
  cards = input<any>();
  isLoading = computed(() => this.cards().length === 0);
  
  viewAd(id: number){
    this.idEmitter.emit(id);
  }
}
