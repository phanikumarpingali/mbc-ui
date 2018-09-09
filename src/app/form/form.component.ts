import { Component, OnInit, Input, OnChanges, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  constructor() { }

  @Input()
  type;
  @Input()
  data;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.data = changes.data.currentValue;
    }
    if (changes.type) {
      this.type = changes.type.currentValue;
    }
  }

  addTransaction() {
    this.data.unshift({
      id: '',
      transactionType: '',
      transactionId: '',
      transactionDate: '',
      amount: ''
    });
  }
  update(data, index) {
    this.data[index].id = 'james bond';
    this.data[index] = data;
  }

  delete(i) {
    this.data.splice(i, 1);
  }

}
