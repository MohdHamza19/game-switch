import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'widget-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    trigger('slideIn', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({ transform: 'translateX(200%)' }),
        animate('500ms ease-in')
      ]),
      transition(':leave', [
        animate('100ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;
  @Input() showModal: boolean = false;
  @Input() isLogin: boolean = false;
  @Output() modalClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  showPhoneNumber = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required]),
    otp: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required),
  });
  showOtp: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['showModal'].firstChange && changes['showModal']) {
      if (changes['showModal'].currentValue === true) {
        this.openModal();
      } else {
        this.modal.nativeElement.classList.remove('popup-open');
      }
    }
  }

  onSubmit() {
    // this.showPhoneNumber ? this.showPhoneNumber = false : this.closeModal();
    if(this.showPhoneNumber && this.showOtp){
      this.showPhoneNumber = false;
      this.showOtp = false;
      return;
    }
    if (this.showPhoneNumber) {
      // this.showPhoneNumber = false;
      this.showOtp = true;
      return;
    }
    if(!this.showPhoneNumber && this.showOtp){
      this.closeModal();
      return;
    }
    this.closeModal();
  }

  closeModal() {
    this.modalClose.emit(false);
    this.showPhoneNumber = true;
    this.showOtp = false;
    this.overlay.nativeElement.classList.remove('show-overlay');
    document.body.style.overflow = 'auto';
  }

  openModal() {
    this.modal.nativeElement.classList.add('popup-open');
    this.overlay.nativeElement.classList.add('show-overlay');
    document.body.style.overflow = 'hidden';
  }
}
