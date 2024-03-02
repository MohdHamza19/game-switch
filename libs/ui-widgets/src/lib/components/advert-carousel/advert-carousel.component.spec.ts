import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertCarouselComponent } from './advert-carousel.component';

describe('AdvertCarouselComponent', () => {
  let component: AdvertCarouselComponent;
  let fixture: ComponentFixture<AdvertCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
