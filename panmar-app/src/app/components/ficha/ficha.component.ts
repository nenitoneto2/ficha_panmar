import { Component } from '@angular/core';
import LivingCharacter, { CharacterOrigins, CharacterStats } from 'src/data/structures/character';
import { Character } from 'src/data/structures/character';
import PlayableSpecies from 'src/data/structures/species';
import MagicElement from 'src/data/structures/elements';
import Rank from 'src/data/structures/powerrank';
import Talents from 'src/data/structures/talents';
import Equipment from 'src/data/structures/equipment';
import Symbols from 'src/data/structures/symbols';
import { GetTotalLifeDices, GetTotalManaDices, GetTotalKnowledge } from 'src/data/structures/powerrank';
import { StatType } from 'src/data/structures/stats';
import { Proficiencies } from 'src/data/structures/proficiencies';
import { KnowledgeCollection } from 'src/data/structures/knoledge';
require('../../../data/db/CharacterDBObject')

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
    stats: new CharacterStats(0, 0, 0, 0, 0, 1),
    talents: [Talents.Meditate, Talents.MagicalLearn, Talents.SmallTricks],
    origins: CharacterOrigins.OrchidInstitute,
    equipments: [this.wand],
    symbols: Symbols.None,
    proficiencies: new Proficiencies([]),
    styles: [],
    magics: [],
    knowledges: new KnowledgeCollection(),
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

  dice:number = 0

  rollCombatant(){
    this.dice = this.sampleCharacter.characterInfo.stats.GetStat(StatType.Combatant).RollStat()
  }

  rollMagic(){
    this.dice = this.sampleCharacter.characterInfo.stats.GetStat(StatType.Magic).RollStat()
  }

  rollSagacious(){
    this.dice = this.sampleCharacter.characterInfo.stats.GetStat(StatType.Sagacious).RollStat()
  }

  rollCreate(){
    this.dice = this.sampleCharacter.characterInfo.stats.GetStat(StatType.Create).RollStat()
  }

  rollProtector(){
    this.dice = this.sampleCharacter.characterInfo.stats.GetStat(StatType.Protector).RollStat()
  }

  rollEloqunce(){
    this.dice = this.sampleCharacter.characterInfo.stats.GetStat(StatType.Eloquence).RollStat()
  }

  addnumber() {
    this.cavalo++
  }
}
