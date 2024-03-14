import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElroldMainComponent } from './elrold-main.component';

describe('ElroldMainComponent', () => {
  let component: ElroldMainComponent;
  let fixture: ComponentFixture<ElroldMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElroldMainComponent]
    });
    fixture = TestBed.createComponent(ElroldMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
