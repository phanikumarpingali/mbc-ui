import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent {

  constructor(private httpService: HttpService) { }

  @Input()
  editIncome;
  @Input()
  editExpence;
  @Input()
  clientData: Object[];
}
