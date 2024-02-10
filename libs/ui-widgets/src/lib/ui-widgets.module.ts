import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [HeaderComponent, HeroComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, HeroComponent]
})
export class UiWidgetsModule { }
