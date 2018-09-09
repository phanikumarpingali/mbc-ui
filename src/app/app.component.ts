import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  isEditIncome: Boolean = false;
  isEditExpence: Boolean = false;
  close(reason: string) {
    this.sidenav.close();
  }
}
