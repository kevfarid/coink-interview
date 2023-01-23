import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import {
  Character,
  CharacterFilter,
} from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://rickandmortyapi.com/api/character';

  getCharacters({ name, type }: CharacterFilter = { name: '', type: '' }) {
    return this.http.get<Character[]>(`${this.baseUrl}`).pipe(
      map((response: any) => response.results),
      map((characters: Character[]) =>
        this.filterCharacters(characters, name, type)
      )
    );
  }

  private filterCharacters(
    characters: Character[],
    name: string,
    type: string
  ) {
    return characters.filter((character) => {
      if (name && type) {
        return (
          character.name.toLowerCase().includes(name.toLowerCase()) &&
          character.species.toLowerCase().includes(type.toLowerCase())
        );
      }

      if (name) {
        return character.name.toLowerCase().includes(name.toLowerCase());
      }

      if (type) {
        return character.species.toLowerCase().includes(type.toLowerCase());
      }

      return true;
    });
  }
}
