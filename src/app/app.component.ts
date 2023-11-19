import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Event, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { filter, map } from 'rxjs';
import { slideInAnimation } from './route-animation';
import { BaseOutletComponent } from './components/base-outlet/base-outlet.component';
import { MyGroupsComponent } from './pages/my-groups/my-groups.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MyExpenses';
  isChildren: boolean = false;
  // Sets initial value to true to show loading spinner on first load
  loading = true

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
          this.isChildren = route.component != MyGroupsComponent;
        });
      });

      this.router.events.subscribe((e : Event) => {
        this.navigationInterceptor(e);
      })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }

  }




}
