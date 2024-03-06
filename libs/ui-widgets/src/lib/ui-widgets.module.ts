import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertCardComponent } from './components/advert-card/advert-card.component';
import { AdvertCarouselComponent } from './components/advert-carousel/advert-carousel.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'ad', component: LoginComponent },
  // add more routes as needed
];

@NgModule({
  declarations: [HeaderComponent, HeroComponent, LoginComponent, AdvertCardComponent, AdvertCarouselComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, HeroComponent, LoginComponent, AdvertCardComponent, AdvertCarouselComponent, ReactiveFormsModule]
})
export class UiWidgetsModule { }
