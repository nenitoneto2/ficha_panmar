import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Elements } from 'src/app/shared/enums/element';
import { LeveledRank, Rank } from 'src/app/shared/enums/rank';
import { Species } from 'src/app/shared/enums/specie';

@Component({
  selector: 'app-personagem-basis',
  templateUrl: './personagem-basis.component.html',
  styleUrls: ['./personagem-basis.component.scss']
})
export class PersonagemBasisComponent {
  characterName: string
  leveledRanks = Object.values(LeveledRank)
  formLevelRank : LeveledRank;
  species = Object.values(Species)
  characterSpecie: Species
  hanaku = 'Hanaku'
  magicElements = Object.values(Elements)
  primaryElement: Elements
  secondaryElement: Elements

  @Output() onValueChange = new Subject<{characterName: string, formLevelRank: LeveledRank, 
    characterSpecie: Species, primaryElement: Elements, secondaryElement: Elements}>()


  OnValueChange(){
    let submitInfo = {characterName: this.characterName, formLevelRank: this.formLevelRank, 
      characterSpecie: this.characterSpecie, primaryElement: this.primaryElement, secondaryElement: this.secondaryElement}

    return this.onValueChange.next(submitInfo)
  }
}
