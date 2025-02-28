import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  private environmentUrl: string;

  constructor(private http: HttpClient, @Inject('environment') environment: { production: boolean, baseUrl: string }) {
    this.environmentUrl = environment.baseUrl;
  }

  getAllAdverts() {
    return this.http.get(`${this.environmentUrl}/advert/all`);
  }

  getAdvertById(id: number) {
    return this.http.get(`${this.environmentUrl}/advert/${id}`);
  }

  getGameBySearch(input: string) {
    return this.http.get(`${this.environmentUrl}/games/ps4/${input}`);
  }

  postAdvert(advert: any) {
    return this.http.post(`${this.environmentUrl}/advert/post`, advert);
  }
}
