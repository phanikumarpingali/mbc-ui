import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  @Input()
  editIncome;
  incomeData: Object[];
  @Input()
  editExpence;
  expencesData: Object[];

  ngOnInit() {
    this.getIncomeData();
    this.getExpencesData();
  }

  getIncomeData() {
    this.httpService.getIncomeData().subscribe(data => {
      this.incomeData = data;
    }, error => {
      console.log(error);
    });
  }

  getExpencesData() {
    this.httpService.getExpenceData().subscribe(data => {
      this.expencesData = data;
    }, error => {
      console.log(error);
    });
  }

}
