import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElroldMagicComponent } from './elrold-magic.component';

describe('ElroldMagicComponent', () => {
  let component: ElroldMagicComponent;
  let fixture: ComponentFixture<ElroldMagicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElroldMagicComponent]
    });
    fixture = TestBed.createComponent(ElroldMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
