import { Component } from '@angular/core';
import { expense, expenseToAdd, groupExpense } from '../../interfaces/expense';
import { ApiService } from 'src/app/services/api.service';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  expenses: Array<groupExpense> = [];
  myTotal = 0;
  total = 0;
  group_id:number;
  user_id: number;

  form = this.fb.group({
    "title": ['',],
    "amount": [0,],
  });

  constructor(protected apiService: ApiService, protected fb: NonNullableFormBuilder, protected activatedRoute:ActivatedRoute, protected userService:UserService) { 
    this.user_id = this.userService.getUser().id;
    this.group_id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

  }

  ngOnInit() {

    this.activatedRoute.data.subscribe((data: any) => {
      this.expenses = data.expenses;

      for(let i=0;i<this.expenses.length;i++){
        let expense = this.expenses[i];

        this.total += expense.amount;
        if(expense.user_id = this.user_id){
          this.myTotal += expense.amount
        }
      }
      
      console.log(data);
    });

  }

  addGroupExpense() {
    let expense: expenseToAdd = {
      title: this.form.getRawValue().title,
      amount: this.form.getRawValue().amount,
      user_id: this.user_id,
      group_id: this.group_id,
    }

    this.apiService.addGroupExpense(expense).catch((error:any)=>{});
  }

}
