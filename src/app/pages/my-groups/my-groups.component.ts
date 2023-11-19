import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss'],
})
export class MyGroupsComponent {

  constructor(protected apiService: ApiService) {}

  ngOnInit(){
    
  }

  ngAfterViewInit(){
    console.log("hi");
    
    this.apiService.getGroups().then((data:any)=>{
      console.log(data); 
    }) 
  }
}
