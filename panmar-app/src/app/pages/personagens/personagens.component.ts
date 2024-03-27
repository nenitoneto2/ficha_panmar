import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/classes/character/character';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit{
  characters: Character[]
  
  constructor(private charService: CharacterService){

  }

  ngOnInit(): void {
    this.characters = this.charService.GetCharacters()
  }
}
