import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CharacterService } from "./character.service";
import { Character } from "../classes/character/character";
import { tap } from "rxjs";

const path: string = 'https://pan-mar-development-default-rtdb.firebaseio.com/characters/'

@Injectable()
export class CharacterDataStorageService{
    constructor(private http: HttpClient, private charService: CharacterService){

    }

    storeCharacters(){
        const characters = this.charService.GetCharacters();
        this.http.put(
            path + 'characters.json', characters
        ).subscribe(response => {
            console.log(response)
        })
    }

    fetchCharacter(){
        return this.http.get<Character[]>(
            path + 'characters.json'
        ).pipe(
            tap(characters => {
            this.charService.SetCharacters(characters)
        }))
    }
}