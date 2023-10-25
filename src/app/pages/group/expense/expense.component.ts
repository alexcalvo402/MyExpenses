import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent {

  form:FormGroup = this.fb.group({
    "title": ['',],
    "quantity": ['',]
  })
  constructor(protected apiService:ApiService,protected location:Location,protected fb: NonNullableFormBuilder, ){}

  addExpense(){
    let i_params = this.form.value;
    this.apiService.addExpense(i_params);


    this.location.back();
  }
}
