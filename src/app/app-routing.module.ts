import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { AdvertPageComponent } from './components/advert-page/advert-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: AdvertsComponent
  },
  {
    path: 'ad/:id',
    component: AdvertPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
