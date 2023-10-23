import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]

})
export class AppComponent {
  title = 'MyExpenses';
  isChildren: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute.firstChild)
      )
      .subscribe((route: any) => {
        while (route?.children?.length! > 0) {
          route = route?.firstChild;
        }

        route!.title.subscribe((title: any) => {
          this.title = title;
          this.isChildren =
          route.parent != null &&
            !(route.parent?.component == AppComponent);
        });
      });
  }
}
