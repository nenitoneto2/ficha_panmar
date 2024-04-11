import { Injectable } from "@angular/core";
import { Character } from "../classes/character/character";
import { CharacterDataStorageService } from "./character.data-storage";
import { LeveledRank } from "../enums/rank";
import { Species } from "../enums/specie";
import { Elements } from "../enums/element";
import { Health } from "../classes/character/vitals/health";
import { Mana } from "../classes/character/vitals/mana";
import { DeathSaves } from "../classes/character/death-saves";
import { Meridians } from "../classes/character/meridians/meridians";
import { Stats } from "../classes/character/stats/stats";
import { Skills } from "../classes/character/skills/skills";
import { Subject } from "rxjs";

@Injectable()
export class CharacterService{
    charactersChanges = new Subject<Character[]>();

    private characters: Character[] = [
        //{
        //    name: 'Teste',
        //    rank: LeveledRank.Bronze1,
        //    species: Species.Feline,
        //    primaryElement: Elements.Air,
        //    secondaryElement: Elements.None, 
        //   PO: 10,
        //    Crystals: 100,
        //    characterDescription: 'This is a Test',
        //    health: new Health(),
        //   mana: new Mana(),
        //    deathSaves: new DeathSaves(),
        //    success: 100,
        //    meridians: new Meridians(),
        //    stats: new Stats(),
        //    skills: new Skills()
        //}
    ]

    GetCharacters(){
        return this.characters.slice()
    }

    GetCharacter(id:number){
        return this.characters[id]
    }

    SetCharacters(characters : Character[]){
        this.characters = characters
        this.charactersChanges.next(this.characters.slice())
    }

    UpdateCharacter(id: number, newCharacter){
        this.characters[id] = newCharacter
        this.charactersChanges.next(this.characters.slice())
    }

    AddCharacter(character: Character){
        this.characters.push(character)
        this.charactersChanges.next(this.characters.slice())
    }

    RemoveCharacter(id: number){
        this.characters.splice(id, 1)
        this.charactersChanges.next(this.characters.slice())
    }
}