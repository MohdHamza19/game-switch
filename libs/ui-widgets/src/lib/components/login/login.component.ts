import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'widget-login-modal',
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
  showModal: boolean = false;
  @Input() isLogin: boolean = true;
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

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(){
    this.loginService.loginModalState$.subscribe((state) => {
      if(state){
        this.openModal();
      }
    });
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (!changes['showModal'].firstChange && changes['showModal']) {
  //     if (changes['showModal'].currentValue === true) {
  //       this.openModal();
  //     } else {
  //       this.modal.nativeElement.classList.remove('popup-open');
  //     }
  //   }
  // }

  onSubmit() {
    if(!this.isLogin){
      if(this.showPhoneNumber && this.showOtp){
        this.showPhoneNumber = false;
        this.showOtp = false;
        return;
      }
      if (this.showPhoneNumber) {
        this.showOtp = true;
        return;
      }
      if(!this.showPhoneNumber && this.showOtp){
        this.closeModal();
        return;
      }
      this.closeModal();
    } else {
      this.loginService.loginUser();
      this.closeModal();
    }
  }

  closeModal() {
    this.modalClose.emit(false);
    this.isLogin = true;
    this.showPhoneNumber = true;
    this.showOtp = false;
    this.showModal = false;
    this.overlay.nativeElement.classList.remove('show-overlay');
    this.modal.nativeElement.classList.remove('popup-open');
    document.body.style.overflow = 'auto';
  }

  openModal() {
    this.showModal = true;
    this.modal.nativeElement.classList.add('popup-open');
    this.overlay.nativeElement.classList.add('show-overlay');
    document.body.style.overflow = 'hidden';
  }

  showLogin(){
    this.isLogin = false;
    console.log('here');
  }
}
