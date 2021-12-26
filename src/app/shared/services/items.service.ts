// src/app/core/services/tour-events.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class TourEventsService {
  private eventsPath = 'item';

  constructor(private http: HttpClient) { }

  getPharmacyItems(){
    return this.http.get<Item[]>(environment.apiUrl+this.eventsPath);
  }
}