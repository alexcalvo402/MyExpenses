import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserService } from './user.service';

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

  getGroups(){
    let user_id = this.userService.getUser().id;
    let url = `http://${this.ip}/my-groups/getGroups.php?user_id=${user_id}`;
    return this.get(url);
  }

  addGroup(params:any){

    let url = `http://${this.ip}/my-groups/getGroups.php?user`;
    this.post(url,params);
  }



}
