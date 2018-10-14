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
    console.log(clientData);
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
