import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() isChildren: boolean = false;

  constructor(protected router: Router) {}

  goBack(): void {
    this.router.navigate(['../']);
  }
}
