import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() isChildren: boolean = false;

  constructor(protected router: Router, private route: ActivatedRoute) {}

  goBack(): void {
    console.log(this.router.url)
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
