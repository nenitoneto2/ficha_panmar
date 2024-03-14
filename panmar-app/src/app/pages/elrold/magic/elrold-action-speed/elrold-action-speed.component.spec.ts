import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElroldActionSpeedComponent } from './elrold-action-speed.component';

describe('ElroldActionSpeedComponent', () => {
  let component: ElroldActionSpeedComponent;
  let fixture: ComponentFixture<ElroldActionSpeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElroldActionSpeedComponent]
    });
    fixture = TestBed.createComponent(ElroldActionSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
