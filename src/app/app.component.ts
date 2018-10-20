import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpService } from './http.service';
import { MatDialog } from '@angular/material';
import { AddClientDialogComponent } from './add-client-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isEditIncome: Boolean = false;
  isEditExpence: Boolean = false;
  clientData: Object;

  incomeData: Object[];
  expencesData: Object[];
  // for dialog
  clientName: String;
  clientDescription: String;
  constructor(private httpService: HttpService, public dialog: MatDialog) { }
  ngOnInit() { }
  close(reason: string) {
    this.sidenav.close();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      width: '300px',
      data: { clientName: this.clientName, clientDescription: this.clientDescription }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Closed ' + result);
    });
  }
  setClientDetails(clientData) {
    this.clientData = clientData;
    this.clientData['income'] = [
      {
        'id': 1,
        'transactionType': 'Bank Transfer',
        'transactionId': '001003',
        'transactionDate': '9/1/2018',
        'amount': 'Rs. 2,00,000'
      },
      {
        'id': 2,
        'transactionType': 'Cheque deposit',
        'transactionId': '1110222012112',
        'transactionDate': '2/1/2018',
        'amount': 'Rs. 2,00,000'
      },
      {
        'id': 3,
        'transactionType': 'Cash deposit',
        'transactionId': '990111090',
        'transactionDate': '4/1/2018',
        'amount': 'Rs. 2,00,000'
      },
      {
        'id': 4,
        'transactionType': 'Bank Transfer',
        'transactionId': '001004',
        'transactionDate': '19/1/2018',
        'amount': 'Rs. 2,00,000'
      },
      {
        'id': 5,
        'transactionType': 'Bank Transfer',
        'transactionId': '001005',
        'transactionDate': '18/1/2018',
        'amount': 'Rs. 2,00,000'
      }
    ];
    this.clientData['groupedPayments'] = { 'Expence 1': '100000', 'Expence 2': '200000', 'Expence 3': '300000' };
  }
}
