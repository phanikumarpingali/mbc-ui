import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExpencesDialogComponent } from '../expences-dialog.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {

  constructor(public dialog: MatDialog, private httpService: HttpService) { }

  @Input()
  type;
  @Input()
  data;
  @Input()
  clientId;

  private groupedData = [];

  ngOnInit() {
  }

  getDetiailGroupByResults(groupedData) {
    this.httpService.getExpenceDetailsByClientIdAndVendorName(this.clientId, groupedData.expence).subscribe(data => {
      if (data.status === 'success') {
        const dialogRef = this.dialog.open(ExpencesDialogComponent, {
          width: '100%',
          data: { tableData: data.responseObject, clientId: this.clientId }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('Dialog Closed ' + result);
        });
      } else {
        alert(data.errorMessage);
      }
    }, error => {
      console.log(error);
    })
  }

  getDateFormat(dateObject) {
    var date = new Date(dateObject);
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
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

    if (this.type === 'Expence') {
      if (this.data) {
        Object.keys(this.data).forEach(element => {
          this.groupedData.push({ 'expence': element, 'amount': this.data[element] });
        });
      }else{
        this.groupedData = [];
      }
    }
  }
}
