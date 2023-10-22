import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss'],
})
export class MyGroupsComponent {
  constructor(protected ApiService: ApiService) {
    this.ApiService.getGroups().then((data: any) => {});
  }
}
