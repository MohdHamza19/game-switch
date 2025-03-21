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

    this.submitVals();
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
    console.log(element, option);
    
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
      includesBox: this.dropdownOptions.box,
      playableOn: this.dropdownOptions.model,
      openToSale: this.dropdownOptions.sale,
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

  submitVals() {
    const vals = [
      {
        "title": "Horizon Forbidden West",
        "description": "A breathtaking open-world adventure with stunning landscapes and intense combat.",
        "location": "San Francisco, CA",
        "condition": "Excellent",
        "platform": "PlayStation",
        "includesBox": "Yes",
        "playableOn": "PS5",
        "openToSale": "Yes"
      },
      {
        "title": "Starfield",
        "description": "A vast space RPG with deep storytelling and endless exploration.",
        "location": "Seattle, WA",
        "condition": "Good",
        "platform": "Xbox",
        "includesBox": "No",
        "playableOn": "Xbox Series X",
        "openToSale": "Yes"
      },
      {
        "title": "Resident Evil 4 Remake",
        "description": "Survival horror classic reimagined with modern visuals and gameplay.",
        "location": "Miami, FL",
        "condition": "Working",
        "platform": "PlayStation",
        "includesBox": "Yes",
        "playableOn": "PS5",
        "openToSale": "No"
      },
      {
        "title": "Forza Motorsport",
        "description": "A hyper-realistic racing simulation with cutting-edge graphics and physics.",
        "location": "Dallas, TX",
        "condition": "Excellent",
        "platform": "Xbox",
        "includesBox": "Yes",
        "playableOn": "Xbox Series X",
        "openToSale": "Yes"
      },
      {
        "title": "Dead Space Remake",
        "description": "A terrifying sci-fi horror experience with immersive atmosphere and gameplay.",
        "location": "Boston, MA",
        "condition": "Good",
        "platform": "PlayStation",
        "includesBox": "No",
        "playableOn": "PS5",
        "openToSale": "Yes"
      }
    ];
  
    vals.forEach(val => {
      this.advertService.postAdvert(val).subscribe(() => {
        console.log('submitted', val);
      });
    });
  }
}