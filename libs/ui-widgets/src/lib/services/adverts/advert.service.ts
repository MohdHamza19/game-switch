import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  constructor(private http: HttpClient) { }

  getAllAdverts(){
    return this.http.get('http://localhost:8081/advert/all');
  }

  getAdvertById(id: number){
    return this.http.get(`http://localhost:8081/advert/${id}`);
  }

  getGameBySearch(input: string){
    return this.http.get(`http://localhost:8081/games/ps4/${input}`);
  }
}
