import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = '¿?';
  isChildren: boolean = false;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.title.subscribe((title: any) => {
      this.title = title;
    });
    this.isChildren = this.activatedRoute.parent !== null && !(this.activatedRoute.parent.component! instanceof AppComponent);

    console.log(this.activatedRoute.parent !== null);
    console.log(!(this.activatedRoute.parent?.component! instanceof AppComponent));
    console.log(typeof this.activatedRoute.parent?.component);
  }
}
