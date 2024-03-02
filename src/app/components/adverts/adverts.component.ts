import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrl: './adverts.component.scss'
})
export class AdvertsComponent {
  @ViewChildren('arrow') arrows!: QueryList<ElementRef>;
  cards: Array<any> = [];

  constructor(private renderer: Renderer2, private router: Router) { }
  
  ngOnInit() {
    this.cards = [
      { id: 1, title: 'Card Title 1', location: 'Location 1', condition: 'Condition 1', price: '800' },
      { id: 2, title: 'Card Title 2', location: 'Location 2', condition: 'Condition 2', price: '800' },
      { id: 3, title: 'Card Title 3', location: 'Location 3', condition: 'Condition 3', price: '800' },
      { id: 4, title: 'Card Title 4', location: 'Location 4', condition: 'Condition 4', price: '800' },
      { id: 5, title: 'Card Title 5', location: 'Location 5', condition: 'Condition 5', price: '800' },
      { id: 6, title: 'Card Title 6', location: 'Location 6', condition: 'Condition 6', price: '800' }
    ];
  }

  ngAfterViewInit(){
    this.arrows.forEach(arrow => {
      arrow.nativeElement.addEventListener('click', () => {
        arrow.nativeElement.classList.toggle('rotate');
      });
    });

    //removes the rotate class when the user clicks outside of the dropdown
    this.renderer.listen('document', 'click', (event) => {
      if (!this.arrows.some(arrow => arrow.nativeElement.contains(event.target))) {
        this.arrows.forEach(arrow => {
          arrow.nativeElement.classList.remove('rotate');
        });
      }
    });
  }

  viewAdvert(id: number){
    const data = this.cards.find(card => card.id === id);
    this.router.navigate(['/ad', id], { state: { data: data } });
  }
}
