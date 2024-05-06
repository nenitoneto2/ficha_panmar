import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHelperComponent } from './nav-helper.component';

describe('NavHelperComponent', () => {
  let component: NavHelperComponent;
  let fixture: ComponentFixture<NavHelperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHelperComponent]
    });
    fixture = TestBed.createComponent(NavHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
