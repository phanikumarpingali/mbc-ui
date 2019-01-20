'use strict';

import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  constructor() { }

  URL: Object = {
    'CLIENT_LIST': '/client/list',
    'CLIENT_DETAILS_BY_ID': '/client/',
    // 1
    'ADD_CLIENT': '/client/save',
    'ADD_UPDATE_INCOME': '/account/addincome/',
    'DELETE_INCOME': '/account/delincome/',
    // 2
    'GET_EXPENCES_LIST_BY_VENDOR_NAME': '/account/expensesbyvendor/',
    'ADD_UPDATE_EXPENCE': '/account/addexpense/',
    'DELETE_EXPENCE': '/account/delexpense/'
  };

  FIXTURE_URL: Object = {
    'CLIENT_LIST': '/CLIENT_LIST.json',
    'INCOME_DATA': '/INCOME_DATA.json',
    'EXPENCES_DATA': '/EXPENCES_DATA.json',
    'CLIENT_DETAILS': '/CLIENT_DETAILS.json'
  };

  getFixtures = (_url: string) => {
    return environment.fixturePath + this.FIXTURE_URL[_url];
  }
  getServiceUrl = (_url: string) => {
    return environment.server + environment.port + this.URL[_url];
  }
}
