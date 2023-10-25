import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() isChildren: boolean = false;



  constructor(private _location: Location,protected router: Router) {}

  goBack(): void {
    console.log(this.router.url)
    this._location.back();
  }
  
  
}
