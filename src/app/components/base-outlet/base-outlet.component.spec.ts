import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseOutletComponent } from './base-outlet.component';

describe('BaseOutletComponent', () => {
  let component: BaseOutletComponent;
  let fixture: ComponentFixture<BaseOutletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseOutletComponent]
    });
    fixture = TestBed.createComponent(BaseOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
