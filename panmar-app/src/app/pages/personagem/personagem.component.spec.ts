import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemComponent } from './personagem.component';

describe('PersonagemComponent', () => {
  let component: PersonagemComponent;
  let fixture: ComponentFixture<PersonagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonagemComponent]
    });
    fixture = TestBed.createComponent(PersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
