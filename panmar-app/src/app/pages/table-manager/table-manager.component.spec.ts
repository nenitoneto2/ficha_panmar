import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableManagerComponent } from './table-manager.component';

describe('TableManagerComponent', () => {
  let component: TableManagerComponent;
  let fixture: ComponentFixture<TableManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableManagerComponent]
    });
    fixture = TestBed.createComponent(TableManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
