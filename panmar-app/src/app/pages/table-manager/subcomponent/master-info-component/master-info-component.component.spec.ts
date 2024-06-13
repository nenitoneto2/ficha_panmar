import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterInfoComponentComponent } from './master-info-component.component';

describe('MasterInfoComponentComponent', () => {
  let component: MasterInfoComponentComponent;
  let fixture: ComponentFixture<MasterInfoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterInfoComponentComponent]
    });
    fixture = TestBed.createComponent(MasterInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
