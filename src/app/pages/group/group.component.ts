import { Component } from '@angular/core';
import { groupExpense } from '../../interfaces/expense';
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

  form:FormGroup = this.fb.group({
    "title": ['',],
    "quantity": ['',]
  });
  
  addExpense(){
    let i_params = this.form.value;
    this.apiService.post("addExpense",i_params);
  }

}
