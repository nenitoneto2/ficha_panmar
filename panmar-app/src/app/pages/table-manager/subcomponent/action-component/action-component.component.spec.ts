import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionComponentComponent } from './action-component.component';

describe('ActionComponentComponent', () => {
  let component: ActionComponentComponent;
  let fixture: ComponentFixture<ActionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionComponentComponent]
    });
    fixture = TestBed.createComponent(ActionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
