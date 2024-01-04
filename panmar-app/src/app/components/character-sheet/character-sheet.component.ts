import { Component } from '@angular/core';
import Rank from 'src/data/structures/powerrank';
import { GetTotalLifeDices, GetTotalManaDices, GetTotalKnowledge } from 'src/data/structures/powerrank';
import Talents from 'src/data/structures/talents';
import Symbols from 'src/data/structures/symbols';
import LivingCharacter, { CharacterOrigins, CharacterStats } from 'src/data/structures/character';
import { Character } from 'src/data/structures/character';
import PlayableSpecies from 'src/data/structures/species';
import MagicElement from 'src/data/structures/elements';
import { Proficiencies, Proficiency } from 'src/data/structures/proficiencies';
import { KnowledgeCollection } from 'src/data/structures/knowledge';
import { StatType } from 'src/data/structures/stats';
import { DiceRollInfo } from 'src/resorces/dice';
import ProficienciesType from 'src/data/structures/proficiencies';
import CharacterService from 'src/data/db/character.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss'],
  providers: [CharacterService]
})
export class CharacterSheetComponent {
  
  /*characters: {googleID: any, character: LivingCharacter}[] = [];
  newCharacter: {googleID: any, character: LivingCharacter};
  requestedCharacter: {googleID: any, character: LivingCharacter};

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacter(){
    this.loadCharacters()

    if(this.characters.length > 0){
      this.requestedCharacter = this.characters[0]
    }
   
  }

  loadCharacters() {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  addCharacter() {
      this.characterService.addCharacter("0", this.livingCharacher).subscribe(() => {
      this.loadCharacters();
      this.newCharacter;
    });
  }

  updateCharacter(characterId: string, updatedCharacter: any) {
    this.characterService.updateCharacter(characterId, updatedCharacter).subscribe(() => {
      this.loadCharacters();
    });
  }

  deleteCharacter(characterId: string) {
    this.characterService.deleteCharacter(characterId).subscribe(() => {
      this.loadCharacters();
    });
  }

  saveCharacter(){
    this.newCharacter = {googleID: "0", character: this.livingCharacher}
    this.updateCharacter("0", this.livingCharacher)
  }

  */

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
    proficiencies: new Proficiencies(),
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
    return this.getCharacterStat(StatType.Combatant).modifier
  }

  getMagic() : number{
    return this.getCharacterStat(StatType.Magic).modifier
  }

  getSagacious() : number{
    return this.getCharacterStat(StatType.Sagacious).modifier
  }

  getCreate() : number{
    return this.getCharacterStat(StatType.Create).modifier
  }

  getProtector() : number{
    return this.getCharacterStat(StatType.Protector).modifier
  }

  getEloquence() : number{
    return this.getCharacterStat(StatType.Eloquence).modifier
  }

  getCharacterStat(statType : StatType){
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

  getProficiencies(){
    return this.livingCharacher.characterInfo.proficiencies.proficiencies
  }

  // Method to get the name of a proficiency
  getProficiencyName(type: ProficienciesType): string {
    // You might have a utility function or a map to get the name from the enum
    return ProficienciesType[type];
  }

  // Method to roll proficiency for a specific type
  rollProficiency(type: ProficienciesType): void {
    this.diceInfo = this.livingCharacher.characterInfo.proficiencies.
    RollProficiency(type, this.getCharacterStats(), this.getCharacterKnowledges());

  }

  getCharacterStats(){
    return this.livingCharacher.characterInfo.stats
  }

  getCharacterKnowledges(){
    return this.livingCharacher.characterInfo.knowledges
  }

}
