import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExpencesDialogComponent } from '../expences-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  constructor(public dialog: MatDialog) { }

  @Input()
  type;
  @Input()
  data;

  private groupedData = [];

  ngOnInit() {
  }

  getDetiailGroupByResults(groupedData) {
    const dialogRef = this.dialog.open(ExpencesDialogComponent, {
      width: '100%',
      data: [
        {
          'id': 1,
          'transactionType': 'Bank Transfer',
          'transactionId': '001003',
          'transactionDate': '9/1/2018',
          'amount': 'Rs. 2,00,000'
        },
        {
          'id': 2,
          'transactionType': 'Purchase of Cement',
          'transactionId': '1110222012112',
          'transactionDate': '2/1/2018',
          'amount': 'Rs. 2,00,000'
        },
        {
          'id': 3,
          'transactionType': 'labor charges',
          'transactionId': '990111090',
          'transactionDate': '4/1/2018',
          'amount': 'Rs. 1,00,000'
        },
        {
          'id': 4,
          'transactionType': 'Purchase of Steel',
          'transactionId': '001004',
          'transactionDate': '19/1/2018',
          'amount': 'Rs. 1,00,000'
        },
        {
          'id': 5,
          'transactionType': 'Purchase of Bricks',
          'transactionId': '001005',
          'transactionDate': '18/1/2018',
          'amount': 'Rs. 2,00,000'
        }
      ]
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog Closed ' + result);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.data = changes.data.currentValue;
    }
    if (changes.type) {
      this.type = changes.type.currentValue;
    }

    if (this.type === 'Expence') {
      Object.keys(this.data).forEach(element => {
        this.groupedData.push({ 'expence': element, 'amount': this.data[element] });
      });
    }
  }
}
