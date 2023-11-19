import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { groupMyGroup } from 'src/app/interfaces/group';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss'],
})
export class MyGroupsComponent {
  myGroups: Array<groupMyGroup> = [];

  constructor(protected apiService: ApiService, protected activatedRoute: ActivatedRoute, protected userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.myGroups = data.myGroups;
    });

  }
}