import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Tickets} from '../models/Tickets';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(public http: HttpClient) { }

  getTickets(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>( '../../assets/tickets.json');
  }
}
