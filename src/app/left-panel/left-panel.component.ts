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
  clientDataDetails: Object;
  @Output()
  setClientData: EventEmitter<Object> = new EventEmitter<Object>();

  ngOnInit() {
    this.getClientList();
  }

  getClientList() {
    this.httpService.getClientList().subscribe((data) => {
      this.clientLists = data;
    }, error => {
      console.log(error);
    });
  }

  getClientDetails(clientData) {
    this.httpService.getClientData(clientData).subscribe((data) => {
      this.clientDataDetails = data;
      this.setClientData.emit(this.clientDataDetails);
    }, error => {
      console.log(error);
    });
  }
}
