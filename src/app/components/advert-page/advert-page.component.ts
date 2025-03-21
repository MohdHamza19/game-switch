import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advert-page',
  templateUrl: './advert-page.component.html',
  styleUrl: './advert-page.component.scss'
})
export class AdvertPageComponent {
  card: any = {};
  isPhoneVisible = false;
  loading = true;
  error: string | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.card = history?.state?.data;
    
    if (!this.card) {
      this.error = 'Advertisement not found';
      this.loading = false;
      return;
    }
    
    this.loading = false;
  }

  togglePhone() {
    this.isPhoneVisible = !this.isPhoneVisible;
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
}
