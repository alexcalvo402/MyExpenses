import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';
import { groupMyGroup } from 'src/app/interfaces/group/groupMyGroup';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss'],
})
export class MyGroupsComponent {
  myGroups: Array<groupMyGroup> = [];

  constructor(
    protected apiService: ApiService,
    protected userService: UserService
  ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    let user_id = this.userService.getUser().id;
    this.apiService.getGroups(user_id).then((data: any) => {
      this.myGroups = data;
    });
  }
}
