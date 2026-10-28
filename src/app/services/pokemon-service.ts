import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Pokemon } from '../models/pokemon';

interface PokemonListResponse {
  results: { name: string; url: string }[];
}

interface PokemonApiResponse {
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
}

@Service()
export class PokemonService {
  private http = inject(HttpClient);

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(nameOrId: string | number): Observable<Pokemon> {
    return this.http.get<PokemonApiResponse>(`${this.apiUrl}/${nameOrId}`).pipe(
      map((data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((t) => t.type.name),
      })),
    );
  }

  getPokemons(offset: number, limit: number): Observable<Pokemon[]> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}?offset=${offset}&limit=${limit}`).pipe(
      switchMap((response) => forkJoin(response.results.map((p) => this.getPokemon(p.name)))),
    );
  }
}
