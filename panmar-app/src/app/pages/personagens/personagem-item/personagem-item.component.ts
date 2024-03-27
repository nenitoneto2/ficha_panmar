import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/classes/character/character';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-personagem-item',
  templateUrl: './personagem-item.component.html',
  styleUrls: ['./personagem-item.component.scss']
})
export class PersonagemItemComponent implements OnInit{
  @Input() index: number;
  character: Character;
  constructor(private charService: CharacterService){

  }

  ngOnInit(): void {
    this.character = this.charService.GetCharacter(this.index)
  }
}
