import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CharacterService } from "./character.service";

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

    
}