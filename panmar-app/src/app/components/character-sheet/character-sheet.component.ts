import { Component } from '@angular/core';
import Rank from 'src/data/structures/powerrank';
import { GetTotalLifeDices, GetTotalManaDices, GetTotalKnowledge } from 'src/data/structures/powerrank';
import Talents from 'src/data/structures/talents';
import Symbols from 'src/data/structures/symbols';
import LivingCharacter, { CharacterOrigins, CharacterStats } from 'src/data/structures/character';
import { Character } from 'src/data/structures/character';
import PlayableSpecies from 'src/data/structures/species';
import MagicElement from 'src/data/structures/elements';
import { Proficiencies } from 'src/data/structures/proficiencies';
import { KnowledgeCollection } from 'src/data/structures/knowledge';
import { StatType } from 'src/data/structures/stats';
import { DiceRollInfo } from 'src/resorces/dice';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent {
  
  character: Character = {
    specie: PlayableSpecies.Hanaku,
    element: [MagicElement.Lightning, MagicElement.Reflection],
    rank: Rank.Base2,
    stats: new CharacterStats(0, 1, 0, 0, 0, 1),
    talents: [Talents.Meditate, 
      Talents.MagicalLearn, 
      Talents.SmallTricks, 
      Talents.ArtConnoisseur, 
      Talents.WorldTales,
      Talents.ImageControl
    ],
    origins: CharacterOrigins.OrchidInstitute,
    weapons: [],
    inventory: [],
    symbols: Symbols.None,
    proficiencies: new Proficiencies([]),
    styles: [],
    magics: [],
    knowledges: new KnowledgeCollection(),
    name: "Aurelius Nocturne"
    }

  livingCharacher: LivingCharacter ={
    characterInfo: this.character,
    lifeDices: GetTotalLifeDices(this.character.rank),
    manaDices: GetTotalManaDices(this.character.rank),
    talentPoints: 2,
    maxLife: 14,
    currentLife: 14,
    maxMana: 13,
    currentMana: 13,
    knowledge: GetTotalKnowledge(this.character.rank)
    }

    diceInfo: DiceRollInfo = new DiceRollInfo()

  // Method to convert CharacterOrigins enum value to string
  getCharacterOriginName(origin: CharacterOrigins): string {
    return CharacterOrigins[origin];
  }

  // Method to convert PlayableSpecies enum value to string
  getSpeciesName(species: PlayableSpecies): string {
    return PlayableSpecies[species];
  }

  // Method to convert Rank enum value to string
  getRankName(rank: Rank): string {
    return Rank[rank];
  }

  getCombatant() : number{
    return this.getCharacterStats(StatType.Combatant).modifier
  }

  getMagic() : number{
    return this.getCharacterStats(StatType.Magic).modifier
  }

  getSagacious() : number{
    return this.getCharacterStats(StatType.Sagacious).modifier
  }

  getCreate() : number{
    return this.getCharacterStats(StatType.Create).modifier
  }

  getProtector() : number{
    return this.getCharacterStats(StatType.Protector).modifier
  }

  getEloquence() : number{
    return this.getCharacterStats(StatType.Eloquence).modifier
  }

  getCharacterStats(statType : StatType){
    return this.livingCharacher.characterInfo.stats.GetStat(statType)
  }

  getTalents(){
    return this.livingCharacher.characterInfo.talents
  }

  // Method to convert Talents enum value to string
  getTalentName(talent: Talents): string {
    return Talents[talent];
  }

  rollCombatant(){
    this.diceInfo = this.livingCharacher.characterInfo.stats.GetStat(StatType.Combatant).RollStat()
  }

  rollMagic(){
    this.diceInfo = this.livingCharacher.characterInfo.stats.GetStat(StatType.Magic).RollStat()
  }

  rollSagacious(){
    this.diceInfo = this.livingCharacher.characterInfo.stats.GetStat(StatType.Sagacious).RollStat()
  }

  rollCreate(){
    this.diceInfo = this.livingCharacher.characterInfo.stats.GetStat(StatType.Create).RollStat()
  }

  rollProtector(){
    this.diceInfo = this.livingCharacher.characterInfo.stats.GetStat(StatType.Protector).RollStat()
  }

  rollEloqunce(){
    this.diceInfo = this.livingCharacher.characterInfo.stats.GetStat(StatType.Eloquence).RollStat()
  }

}
