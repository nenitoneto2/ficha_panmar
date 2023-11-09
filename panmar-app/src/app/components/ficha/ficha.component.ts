import { Component } from '@angular/core';
import LivingCharacter, { CharacterOrigins } from 'src/data/structures/character';
import { Character } from 'src/data/structures/character';
import RollDice from '../../../../../ficha-app/src/resorces/dice';
import PlayableSpecies from 'src/data/structures/species';
import MagicElement from 'src/data/structures/elements';
import Rank from 'src/data/structures/powerrank';
import Talents from 'src/data/structures/talents';
import Equipment from 'src/data/structures/equipment';
import Symbols from 'src/data/structures/symbols';
import { GetTotalLifeDices, GetTotalManaDices, GetTotalKnowledge } from 'src/data/structures/powerrank';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent {
  cavalo:number =0;

  wand: Equipment = {name: "Wand - 1 - Ingestion"}

  character: Character = {
    specie: PlayableSpecies.Hanaku,
    element: [MagicElement.Lightning, MagicElement.Reflection],
    rank: Rank.Base1,
    combatant: 0,
    magic: 0,
    sagacious: 0,
    create: 0,
    protector: 0,
    eloquence: 1,
    talents: [Talents.Meditate, Talents.MagicalLearn, Talents.SmallTricks],
    origins: CharacterOrigins.OrchidInstitute,
    equipments: [this.wand],
    symbols: Symbols.None,
    proficiencies: [],
    styles: [],
    magics: [],
    name: "Aurelius Nocturne"
  }

  sampleCharacter: LivingCharacter ={
    characterInfo: this.character,
    lifeDices: GetTotalLifeDices(this.character.rank),
    manaDices: GetTotalManaDices(this.character.rank),
    talentPoints: 1,
    maxLife: 4,
    currentLife: 2,
    maxMana: 8,
    currentMana: 4,
    knowledge: GetTotalKnowledge(this.character.rank)
  }

  rollDice(mod = 0) : number{
    return RollDice(1, 20, mod)
  }

  dice:number = 0

  rollCombatant(){
    this.dice = this.rollDice(this.sampleCharacter.characterInfo.combatant)
  }

  rollMagic(){
    this.dice = this.rollDice(this.sampleCharacter.characterInfo.magic)
  }

  rollSagacious(){
    this.dice = this.rollDice(this.sampleCharacter.characterInfo.sagacious)
  }

  rollCreate(){
    this.dice = this.rollDice(this.sampleCharacter.characterInfo.create)
  }

  rollProtector(){
    this.dice = this.rollDice(this.sampleCharacter.characterInfo.protector)
  }

  rollEloqunce(){
    this.dice = this.rollDice(this.sampleCharacter.characterInfo.eloquence)
  }

  addnumber() {
    this.cavalo++
  }
}
