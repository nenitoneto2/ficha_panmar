import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenTestComponent } from './token-test.component';

describe('TokenTestComponent', () => {
  let component: TokenTestComponent;
  let fixture: ComponentFixture<TokenTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokenTestComponent]
    });
    fixture = TestBed.createComponent(TokenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
