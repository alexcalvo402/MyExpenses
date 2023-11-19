import { Component } from '@angular/core';
import { expense } from '../../interfaces/expense';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  expenses:Array<expense> = [];
  myTotal = 0;
  total = 0;

  ngOnInit(){
    this.getExpenses();
  }

  getExpenses(){
    this.expenses = [{
      title: "Hotel",
      buyer: "Yo",
      price: 102,
      date: new Date(),
    },
    {
      title: "Telepizza",
      buyer: "Ivan",
      price: 24.95,
      date: new Date(),
    },
    {
      title: "Hotel",
      buyer: "Yo",
      price: 30,
      date: new Date(),
    }];

    this.myTotal = 34.65;
    this.total = 0;

  }

}
