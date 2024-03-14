import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElroldDurationComponent } from './elrold-duration.component';

describe('ElroldDurationComponent', () => {
  let component: ElroldDurationComponent;
  let fixture: ComponentFixture<ElroldDurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElroldDurationComponent]
    });
    fixture = TestBed.createComponent(ElroldDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
