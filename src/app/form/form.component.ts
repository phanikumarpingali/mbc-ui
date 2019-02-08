import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    // { provide: MAT_DATE_LOCALE, useValue: 'en_IN' },

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class FormComponent implements OnInit, OnChanges {

  constructor(private httpService: HttpService) {

  }

  @Input()
  type;
  @Input()
  data;
  @Input()
  clientId;

  ngOnInit() { }

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
      referenceNo: '',
      amount: ''
    });
  }

  update(data, index) {
    this.data[index] = data;
    console.log(this.type, this.data[index], this.clientId);
    if (this.type === 'Income') {
      var payLoad = {
        transactionType: this.data[index].transactionType,
        transactionId: this.data[index].transactionId,
        transactionDate: this.data[index].transactionDate,
        referenceNo: this.data[index].referenceNo,
        amount: this.data[index].amount,
      }
      if (payLoad['transactionDate']) {
        var date = new Date(payLoad['transactionDate']);
        date.setHours(6);
        payLoad['transactionDate'] = date.toISOString();
      }

      this.httpService.addUpdateIncome(this.clientId, payLoad).subscribe(data => {
        if (data.status === 'success') {
          alert("Update / Add Success");
          console.log("Update/Add successful");
        } else {
          alert(data.errorMessage);
        }
      }, error => {
        alert("Error in Update / Add");
        console.log(error);
      })
    }

    if (this.type === 'Detail Expence') {
      var payLoad1 = {
        transactionType: this.data[index].transactionType,
        transactionId: this.data[index].transactionId,
        transactionDate: this.data[index].transactionDate,
        referenceNo: this.data[index].referenceNo,
        amount: this.data[index].amount,
        vendorName: this.data[index].vendorName
      }

      if (payLoad1['transactionDate']) {
        var date = new Date(payLoad1['transactionDate']);
        date.setHours(6);
        payLoad1['transactionDate'] = date.toISOString();
      }

      this.httpService.addUpdateExpence(this.clientId, payLoad1).subscribe(data => {
        if (data.status === 'success') {
          alert("Update / Add Success");
          console.log("Update/Add successful");
        } else {
          alert(data.errorMessage);
        }
      }, error => {
        alert("Error in Update / Add");
        console.log(error);
      })
    }
  }

  delete(data, i) {
    var confirmDelete = confirm("Would you like to delete..");
    if (confirmDelete && data.transactionId !== "") {
      if (this.type === 'Income') {
        this.httpService.deleteIncome(this.clientId, { transactionId: data.transactionId }).subscribe(data => {
          if (data.status === 'success') {
            this.data.splice(i, 1);
            alert("Delete Successful");
            console.log(data);
          } else {
            alert(data.errorMessage);
          }
        }, error => {
          alert("Error in Deletion");
          console.log(error);
        })
      }

      if (this.type === 'Detail Expence') {
        this.httpService.deleteExpence(this.clientId, { transactionId: data.transactionId }).subscribe(data => {
          if (data.status === 'success') {
            this.data.splice(i, 1);
            alert("Delete Successful");
            console.log(data);
          } else {
            alert(data.errorMessage);
          }
        }, error => {
          alert("Error in Deletion");
          console.log(error);
        })
      }
    }else{
      this.data.splice(i, 1);
    }
  }
}
