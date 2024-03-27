import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemItemComponent } from './personagem-item.component';

describe('PersonagemItemComponent', () => {
  let component: PersonagemItemComponent;
  let fixture: ComponentFixture<PersonagemItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonagemItemComponent]
    });
    fixture = TestBed.createComponent(PersonagemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
