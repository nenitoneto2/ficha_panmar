import { Injectable } from "@angular/core";
import { Character } from "../classes/character/character";
import { CharacterDataStorageService } from "./character.data-storage";

@Injectable()
export class CharacterService{
    private characters: Character[] = []

    constructor(private charDataStoreage : CharacterDataStorageService){

    }

    GetCharacters(){
        return this.characters.slice()
    }

    GetCharacter(id:number){
        return this.characters[id]
    }

    UpdateCharacter(id: number, newCharacter){
        this.characters[id] = newCharacter
        this.charDataStoreage.storeCharacters()
    }

    AddCharacter(character: Character){
        this.characters.push(character)
        this.charDataStoreage.storeCharacters()
    }

    RemoveCharacter(id: number){
        this.characters.splice(id, 1)
        this.charDataStoreage.storeCharacters()
    }
}