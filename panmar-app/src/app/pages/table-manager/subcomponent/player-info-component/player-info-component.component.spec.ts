import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoComponentComponent } from './player-info-component.component';

describe('PlayerInfoComponentComponent', () => {
  let component: PlayerInfoComponentComponent;
  let fixture: ComponentFixture<PlayerInfoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerInfoComponentComponent]
    });
    fixture = TestBed.createComponent(PlayerInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
