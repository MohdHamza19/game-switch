import { Component, computed, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'widget-advert-card',
  templateUrl: './advert-card.component.html',
  styleUrl: './advert-card.component.scss'
})
export class AdvertCardComponent {
  private readonly DEFAULT_IMAGE = 'assets/images/no_image.jpg';
  @Output() idEmitter: EventEmitter<number> = new EventEmitter<number>();
  cards = input<any>();
  isLoading = computed(() => this.cards().length === 0);
  
  viewAd(id: number){
    this.idEmitter.emit(id);
  }

  getImageUrl(imageUrl: string): string {
    return imageUrl || this.DEFAULT_IMAGE;
  }
}
