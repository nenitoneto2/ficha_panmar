import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemBasisComponent } from './personagem-basis.component';

describe('PersonagemBasisComponent', () => {
  let component: PersonagemBasisComponent;
  let fixture: ComponentFixture<PersonagemBasisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonagemBasisComponent]
    });
    fixture = TestBed.createComponent(PersonagemBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
