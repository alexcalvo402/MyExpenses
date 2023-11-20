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

  constructor(
    protected apiService: ApiService,
    protected activatedRoute: ActivatedRoute,
    protected userService: UserService
  ) {}

  isToday(date: Date): boolean {
    const today = new Date();

    if (today.getDay() == date.getDay() && today.getMonth() == date.getMonth() && today.getFullYear() == date.getFullYear()) {
      console.log('si');
      return true;
    } else {
      console.log('no');
      return false;
    }
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      data.myGroups.forEach((group: groupMyGroup) => {
        // Split timestamp into [ Y, M, D, h, m, s ]
        var t = (group.date as any).split(/[- :]/);

        // Apply each element to the Date function
        var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
        d.setHours(d.getHours() - 1);

        group.date = d;
      });

      this.myGroups = data.myGroups;
    });
  }
}
