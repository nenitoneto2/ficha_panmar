import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElrondComponent } from './elrond.component';

describe('ElrondComponent', () => {
  let component: ElrondComponent;
  let fixture: ComponentFixture<ElrondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElrondComponent]
    });
    fixture = TestBed.createComponent(ElrondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
