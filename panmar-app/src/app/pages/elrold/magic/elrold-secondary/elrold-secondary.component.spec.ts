import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElroldSecondaryComponent } from './elrold-secondary.component';

describe('ElroldSecondaryComponent', () => {
  let component: ElroldSecondaryComponent;
  let fixture: ComponentFixture<ElroldSecondaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElroldSecondaryComponent]
    });
    fixture = TestBed.createComponent(ElroldSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
