import { Component } from '@angular/core';
import { expense, groupExpense } from '../../interfaces/expense';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {
  expenses:Array<groupExpense> = [];
  myTotal = 0;
  total = 0;
  id = "11fk33b";

  constructor(protected apiService:ApiService,protected fb: NonNullableFormBuilder,protected activatedRoute:ActivatedRoute){}

  ngOnInit(){

    this.activatedRoute.data.subscribe((data:any)=>{
      this.expenses = data.expenses;
      console.log(data);
    });
 
  }

  form = this.fb.group({
    "title": ['',],
    "amount": [0,]
  });

  addGroupExpense(){
    let expense:expense = {
      title :  this.form.getRawValue().title,
      amount: this.form.getRawValue().amount,
      user_id: 1,
      group_id: 1,
    }

    this.apiService.addGroupExpense(expense)
  }

}
