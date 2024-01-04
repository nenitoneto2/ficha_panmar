// character.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class CharacterService {

  private apiUrl = 'http://localhost:3001/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCharacter(id: string, character: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, {googleID: id,Character: character});
  }

  updateCharacter(id: string, updatedCharacter: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, {googleID: id,Character: updatedCharacter});
  }

  deleteCharacter(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}

