import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrl: './adverts.component.scss'
})
export class AdvertsComponent {
  @ViewChildren('arrow') arrows!: QueryList<ElementRef>;
  
  constructor(private renderer: Renderer2) { }
  
  ngAfterViewInit(){
    this.arrows.forEach(arrow => {
      console.log(arrow);
      
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
}
