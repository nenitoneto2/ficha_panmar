import { Component } from '@angular/core';
import LivingCharacter, { CharacterOrigins, CharacterStats } from 'src/data/structures/character';
import { Character } from 'src/data/structures/character';
import PlayableSpecies from 'src/data/structures/species';
import MagicElement from 'src/data/structures/elements';
import Rank from 'src/data/structures/powerrank';
import Talents from 'src/data/structures/talents';
import Symbols from 'src/data/structures/symbols';
import { GetTotalLifeDices, GetTotalManaDices, GetTotalKnowledge } from 'src/data/structures/powerrank';
import { StatType } from 'src/data/structures/stats';
import { Proficiencies } from 'src/data/structures/proficiencies';
import { KnowledgeCollection } from 'src/data/structures/knoledge';
import { CharacterDataStorageService } from 'src/data/sessionStorage/characterSessionStorage';
import { CharacterService } from 'src/data/db/character.service';
import { ArcaneEffect, ArcaneWeaponPassive, ArcaneWeapons, ItemType } from 'src/data/structures/itens';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent {
  characters: {googleID: any, character: LivingCharacter}[] = [];
  newCharacter: {googleID: any, character: LivingCharacter};
  requestedCharacter: {googleID: any, character: LivingCharacter};

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getCharacters().subscribe((characters) => {
      this.characters = characters;
    });
  }

  addCharacter() {
    this.characterService.addCharacter("0", this.newCharacter).subscribe(() => {
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

  wand: ArcaneWeapons = { 
                          name: "Wand", 
                          description: "Toque a Distancia",
                          size: 1, 
                          arcaneEffect: ArcaneEffect.Range, 
                          passive: ArcaneWeaponPassive.MagicAim,
                          itemType: ItemType.ArcaneWeapons
                        }

  character: Character = {
    specie: PlayableSpecies.Hanaku,
    element: [MagicElement.Lightning, MagicElement.Reflection],
    rank: Rank.Base1,
    stats: new CharacterStats(0, 0, 0, 0, 0, 1),
    talents: [Talents.Meditate, Talents.MagicalLearn, Talents.SmallTricks],
    origins: CharacterOrigins.OrchidInstitute,
    weapons: [this.wand],
    inventory: [],
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

  charStorage : CharacterDataStorageService = new CharacterDataStorageService();
  dice:number = 0

  saveCharacter(){
    this.newCharacter = {googleID: "0", character: this.sampleCharacter}
    this.addCharacter()
  }

  loadCharacter(){
    this.loadCharacter()
    this.requestedCharacter = this.characters[0]
  }

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
}
