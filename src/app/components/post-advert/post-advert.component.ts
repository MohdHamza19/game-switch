import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdvertService } from '@ui-widgets/public-api';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-post-advert',
  templateUrl: './post-advert.component.html',
  styleUrl: './post-advert.component.scss'
})
export class PostAdvertComponent {
  @ViewChildren('selectElement') selectElement!: QueryList<ElementRef>;
  optionTypes: string[] = ['condition', 'platform', 'box', 'model', 'sale']
  advertForm!: FormGroup;
  selectedCondition: string = 'Select';
  condition: Array<string> = ['Excellent', 'Good', 'Working'];
  platform: Array<string> = ['PlayStation', 'Xbox'];
  box: Array<string> = ['Yes', 'No'];
  model: Array<string> = ['PS5', 'Series X'];
  sale: Array<string> = ['Yes', 'No'];
  [key: string]: any;
  showError = false;

  dropdownOptions: any = {
    condition: '',
    platform: '',
    box: '',
    model: '',
    sale: '',
  };

  constructor(private advertService: AdvertService) { }

  ngOnInit() {
    this.advertForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
    });

    this.checkFormTouched();
  }

  checkFormTouched() {
    // Get control names dynamically from the form
    const controls = Object.keys(this.advertForm.controls);

    controls.forEach(controlName => {
      this.advertForm.get(controlName)?.valueChanges.subscribe(() => {
        if (this.showError) {
          this.showError = false;
        }
      });
    });
  }

  onInputFocus(element: any) {
    this.selectElement.forEach(wrapper => {
      if (wrapper.nativeElement.id === element) {
        wrapper.nativeElement.classList.add('search__box');
      }
    });
  }

  onInputBlur(element: any) {
    setTimeout(() => {
      this.selectElement.forEach(wrapper => {
        if (wrapper.nativeElement.id === element) {
          wrapper.nativeElement.classList.remove('search__box');
        }
      });
    }, 120);
  }

  selectCondition(element: string, option: string) {
    if (element === 'platform') {
      this.dropdownOptions.model = option === 'PlayStation' ? 'PS5' : 'Series X';
    }
    (this.dropdownOptions as any)[element] = option;
  }

  onSubmit() {
    if (!this.advertForm.valid || !this.dropdownOptionsCheck(this.dropdownOptions)) {
      this.showError = true;
      return;
    }

    const formData = {
      ...this.advertForm.value,
      condition: this.dropdownOptions.condition,
      platform: this.dropdownOptions.platform,
      includes_box: this.dropdownOptions.box,
      playable_on: this.dropdownOptions.model,
      open_to_sale: this.dropdownOptions.sale,
      location: this.advertForm.value.location + ', ' + this.advertForm.value.area
    };

    this.advertService.postAdvert(formData).subscribe(() => {
      console.log('submitted', formData);
    })
  }

  dropdownOptionsCheck(options: any) {
    for (let key in options) {
      if (options[key] === '') {
        return false;
      }
    }
    return true;
  }
}