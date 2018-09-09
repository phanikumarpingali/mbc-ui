'use strict';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlService } from './url.service';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private http: HttpClient, private urlService: UrlService) { }

  // get client list
  getClientList(): Observable<any> {
    return this.http.get(this.urlService.getFixtures('CLIENT_LIST'));
  }

  // get income data
  getIncomeData(): Observable<any> {
    return this.http.get(this.urlService.getFixtures('INCOME_DATA'));
  }

  // get expences data
  getExpenceData(): Observable<any> {
    return this.http.get(this.urlService.getFixtures('EXPENCES_DATA'));
  }
}
