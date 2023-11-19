import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { expense, groupExpense } from '../interfaces/expense';
import { group } from '../interfaces/group';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  ip = "83.41.22.60:2020";
  constructor(protected httpService: HttpClient, protected userService: UserService) {}

  post(url:string,params:any = {}){
    let body = JSON.stringify(params);
    return firstValueFrom(this.httpService.post(url, body));
  }

  get(url:string){
    return firstValueFrom(this.httpService.get(url));
  }

  getGroups(user_id:string){
    let url = `http://${this.ip}/my-groups/getGroups.php?user_id=${user_id}`;
    return this.get(url) as Promise<Array<group>>;
  }

  getGroupExpenses(group_id:string){

    let url = `http://${this.ip}/group/getExpenses.php?group_id=${group_id}`;
    return this.get(url) as Promise<Array<groupExpense>>;
  }

  addGroup(params:any){

    let url = `http://${this.ip}/my-groups/getGroups.php?user`;
    return this.post(url,params);
  }

  addGroupExpense(params:expense){

    let url = `http://${this.ip}/group/addGroupExpense.php`;
    return this.post(url,params);

  }



}
