import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestActionComponentComponent } from './request-action-component.component';

describe('RequestActionComponentComponent', () => {
  let component: RequestActionComponentComponent;
  let fixture: ComponentFixture<RequestActionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestActionComponentComponent]
    });
    fixture = TestBed.createComponent(RequestActionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
