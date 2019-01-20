'use strict';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  public CLIENT_LIST: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient, private urlService: UrlService) { }

  // get client list
  getClientList(): Observable<any> {
    return this.http.get(this.urlService.getServiceUrl('CLIENT_LIST'));
  }

  // get income data
  getIncomeData(): Observable<any> {
    return this.http.get(this.urlService.getFixtures('INCOME_DATA'));
  }

  // get expences data
  getExpenceData(): Observable<any> {
    return this.http.get(this.urlService.getFixtures('EXPENCES_DATA'));
  }

  // get client details
  // @param {client id}
  getClientData(clientData): Observable<any> {
    return this.http.get(this.urlService.getServiceUrl('CLIENT_DETAILS_BY_ID') + clientData['clientId']);
  }

  // add income
  // @param {client id}
  addUpdateIncome(clientId,requestData) : Observable<any>{
    return this.http.post(this.urlService.getServiceUrl('ADD_UPDATE_INCOME')+clientId,requestData)
  }

  // delete income
  // @param {client id}
  deleteIncome(clientId,requestData) : Observable<any>{
    return this.http.post(this.urlService.getServiceUrl('DELETE_INCOME')+clientId,requestData);
  }
}
