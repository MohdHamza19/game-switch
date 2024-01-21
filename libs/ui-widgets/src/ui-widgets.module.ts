import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent, 
    FooterComponent
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class UiWidgetsModule { }
