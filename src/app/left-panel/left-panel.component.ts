'use strict';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  clientLists: Object[];

  @Output()
  setClientData: EventEmitter<Object> = new EventEmitter<Object>();

  ngOnInit() {
    this.getClientList();
    this.httpService.CLIENT_LIST.subscribe(data => {
      this.clientLists.push(data);
      console.log(data);
    });
  }

  getClientList() {
    this.httpService.getClientList().subscribe((data) => {
      this.clientLists = data;
      this.getClientDetails(this.clientLists[0]);
    }, error => {
      console.log(error);
    });
  }

  getClientDetails(clientData) {
    this.httpService.getClientData(clientData).subscribe((data) => {
      this.setClientData.emit(data);
    }, error => {
      console.log(error);
    });
  }
}
