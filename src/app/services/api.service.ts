import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected httpService: HttpClient, protected userService: UserService) {}

  post(function_name:string,params:any = {}){
    let url = "http://83.41.22.60:2020/api.php";
    let headers:HttpHeaders = new HttpHeaders().set('content-type','application/json');
    let data = {
      "function":function_name,
      "params":params
    }
    let body = JSON.stringify(data);

    return firstValueFrom(this.httpService.post(url, body, {headers:headers}));
  }

  getGroups(){
    let user_id = this.userService.getUser().id;
    let params = {"user_id":user_id};
    return this.post("getGroups",params);
  }



}
