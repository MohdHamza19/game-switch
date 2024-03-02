import { Component } from '@angular/core';

@Component({
  selector: 'widget-advert-carousel',
  templateUrl: './advert-carousel.component.html',
  styleUrl: './advert-carousel.component.scss'
})
export class AdvertCarouselComponent {

  images = ['../assets/images/tbd/tlou1.jpeg', '../assets/images/tbd/tlou2.jpg', '../assets/images/tbd/tlou3.jpg'];
  currentImageIndex = 0;
  fade = false;
  touchStartCoord!: number;

  nextImage() {
    this.fade = true;
    setTimeout(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.images.length) {
        this.currentImageIndex = 0;
      }
      this.fade = false;
    }, 300);
  }

  previousImage() {
    this.fade = true;
    setTimeout(() => {
      this.currentImageIndex--;
      if (this.currentImageIndex < 0) {
        this.currentImageIndex = this.images.length - 1;
      }
      this.fade = false;
    }, 300);
  }

  touchStart(event: TouchEvent) {
    this.touchStartCoord = event.touches[0].clientX;
  }

  touchEnd(event: TouchEvent) {
    const touchEndCoord = event.changedTouches[0].clientX;
    const difference = touchEndCoord - this.touchStartCoord;

    if (difference > 100) {
      this.previousImage();
    } else if (difference < -100) {
      this.nextImage();
    }
  }
}
