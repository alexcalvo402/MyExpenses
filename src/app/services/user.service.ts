import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser():user{

    return {
      "id":"1",
      "name":"Ivan",
    }
  }
}

interface user{
  id:string,
  name:string,
}
