import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdvertCardComponent } from './components/advert-card/advert-card.component';



@NgModule({
  declarations: [HeaderComponent, HeroComponent, LoginComponent, AdvertCardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, HeroComponent, LoginComponent, AdvertCardComponent, ReactiveFormsModule]
})
export class UiWidgetsModule { }
