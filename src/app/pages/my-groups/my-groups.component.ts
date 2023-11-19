import { Component } from '@angular/core';
import { group } from 'src/app/interfaces/group';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss'],
})
export class MyGroupsComponent {
  myGroups: Array<group> = [];

  constructor(protected apiService: ApiService) {}

  ngOnInit() {
    this.getMyGroups();
  }

  getMyGroups() {
    this.myGroups = [
      {
        title: 'Domino\'s Pizza',
        img: 'https://th.bing.com/th/id/R.ce946cb0bb5786c099513c84a987825a?rik=7Yt2NaRD%2bVPsdw&riu=http%3a%2f%2fwww.sanjaywebdesigner.com%2fportfolio%2fwp-content%2fuploads%2f2014%2f08%2fillustrator-Dominos-logo.jpg&ehk=KUp2FQENB1PXuc%2bshkyAJOFlbSEVhwq%2bha5SQVQ%2fhD4%3d&risl=&pid=ImgRaw&r=0',
        expenses: [
          {
            title: 'Pizza',
            buyer: 'Iván',
            price: 20,
            date: new Date(),
          },
        ],
        groupUser: {
          groupID: 1,
          userID: 1,
          notifications: 0,
        },
      },
    ];
  }
}
