import { Component } from '@angular/core';
import { expense } from '../../interfaces/expense';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  expenses:Array<expense> = [];
  myTotal = 0;
  total = 0;
  id = "11fk33b";

  constructor(protected apiService:ApiService){}

  ngOnInit(){
    this.apiService.post("getGroupExpenses",this.id);
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
    this.total = 170;

  }

}
