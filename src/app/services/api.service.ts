import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected httpService: HttpClient) {}

  getGroups(): Promise<any> {
    let url = "url d'exemple";
    return firstValueFrom(this.httpService.get(url));
  }

  addExpense(i_params:any): Promise<any> {
    let url = "url d'exemple";
    return firstValueFrom(this.httpService.post(url,i_params));
  }
}
