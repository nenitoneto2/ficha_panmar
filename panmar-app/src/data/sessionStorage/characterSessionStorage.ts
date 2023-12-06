
import { Injectable } from '@angular/core';
import LivingCharacter from '../structures/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataStorageService {
  private storageKey = 'character';

  public saveData(data: LivingCharacter, characterId: string): void {
    sessionStorage.setItem(this.storageKey + "_" + characterId, JSON.stringify(data));
  }

  public getData(characterId: string): LivingCharacter {
    const storedData = sessionStorage.getItem(this.storageKey + "_" + characterId);
    return storedData ? JSON.parse(storedData) : null;
  }
}

