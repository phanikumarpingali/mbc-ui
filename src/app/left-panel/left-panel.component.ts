'use strict';

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  clientLists: Object[];

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
}
