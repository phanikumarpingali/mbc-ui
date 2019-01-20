import { Component, OnInit, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  constructor(private httpService: HttpService) { }

  @Input()
  type;
  @Input()
  data;
  @Input()
  clientId;

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.data = changes.data.currentValue;
    }
    if (changes.type) {
      this.type = changes.type.currentValue;
    }
    if (changes.clientId) {
      this.clientId = changes.clientId.currentValue;
    }
  }

  addTransaction() {
    this.data.unshift({
      transactionType: '',
      transactionId: '',
      transactionDate: '',
      amount: ''
    });
  }

  update(data, index) {
    this.data[index] = data;
    console.log(this.type, this.data, this.clientId);
    if (this.type === 'Income') {
      var payLoad = {
        transactionType: this.data.transactionType,
        transactionId: this.data.transactionId,
        transactionDate: this.data.transactionDate,
        amount: this.data.amount,
      }
      this.httpService.addUpdateIncome(this.clientId, payLoad).subscribe(data => {
        console.log("Update/Add successful");
      }, error => {
        console.log(error);
      })
    }
  }

  delete(data, i) {
    this.data.splice(i, 1);
    this.httpService.deleteIncome(this.clientId, { transactionId: data.transactionId }).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

}
