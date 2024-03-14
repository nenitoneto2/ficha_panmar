import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElroldRangeComponent } from './elrold-range.component';

describe('ElroldRangeComponent', () => {
  let component: ElroldRangeComponent;
  let fixture: ComponentFixture<ElroldRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElroldRangeComponent]
    });
    fixture = TestBed.createComponent(ElroldRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
