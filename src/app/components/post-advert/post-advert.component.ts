import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-advert',
  templateUrl: './post-advert.component.html',
  styleUrl: './post-advert.component.scss'
})
export class PostAdvertComponent {
  @ViewChild('conditionSelect') search!: ElementRef;
  advertForm!: FormGroup;
  selectedCondition: string = 'Select';
  conditions: Array<string> = ['Excellent', 'Good', 'Working'];

  ngOnInit() {
    this.advertForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      condition: new FormControl(''),
      location: new FormControl(''),
    });
  }

  onInputFocus() {
    this.search.nativeElement.classList.add('search__box');
  }

  onInputBlur() {
    setTimeout(() => {
      this.search.nativeElement.classList.remove('search__box');
    }, 120);
  }

  selectCondition(condition: string) {
    this.selectedCondition = condition;
  }
}
