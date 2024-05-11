import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CharacterService } from "./character.service";
import { Character } from "../classes/character/character";
import { tap } from "rxjs";
import { AuthService } from "./auth.service";

const path: string = 'https://pan-mar-default-rtdb.firebaseio.com/users/'

@Injectable()
export class CharacterDataStorageService{
    constructor(private http: HttpClient, private charService: CharacterService, private authService: AuthService){

    }

    storeCharacters(){
        const characters = this.charService.GetCharacters();
        this.http.put(
            path + this.authService.userData.uid +"/characters/"+ 'characters.json', characters, {
                params: new HttpParams().set('auth', this.authService.userData.uid)
            }
        ).subscribe(response => {
            console.log(response)
        })
    }

    fetchCharacter(){
        return this.http.get<Character[]>(
            path + this.authService.userData.uid +"/characters/"+  'characters.json', {
                params: new HttpParams().set('auth', this.authService.userData.uid)
            }
        ).pipe(
            tap(characters => {
            this.charService.SetCharacters(characters)
        }))
    }
}