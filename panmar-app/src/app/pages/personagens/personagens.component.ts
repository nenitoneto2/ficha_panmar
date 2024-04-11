import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/shared/classes/character/character';
import { CharacterDataStorageService } from 'src/app/shared/services/character.data-storage';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit{
  characters: Character[]
  subscription: Subscription  
  constructor(private charService: CharacterService, private dataStorage: CharacterDataStorageService){

  }

  ngOnInit(): void {
    this.characters = this.charService.GetCharacters()
    this.subscription = this.charService.charactersChanges.subscribe(characters => {
      this.characters = characters
    })
  }

  Fetch(){
    this.dataStorage.fetchCharacter().subscribe(response => {
      console.log(response);
    })
  }
}
