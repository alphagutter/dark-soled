// src/app/services/character.service.ts
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { environment } from '../../environment/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private myAppUrl: string;
  private myApiUrl: string;
  

  constructor(private http: HttpClient){
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/characters/'
  }

  getListCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }

  addCharacter(character: Character): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, character)
  }

}
