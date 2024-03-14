import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCustomComponent } from './icon-custom.component';

describe('IconCustomComponent', () => {
  let component: IconCustomComponent;
  let fixture: ComponentFixture<IconCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconCustomComponent]
    });
    fixture = TestBed.createComponent(IconCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
