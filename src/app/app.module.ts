import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiWidgetsModule } from '../../libs/ui-widgets/src/lib/ui-widgets.module';
import { HomeComponent } from './components/home/home.component';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { AdvertPageComponent } from './components/advert-page/advert-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvertsComponent,
    AdvertPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiWidgetsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
