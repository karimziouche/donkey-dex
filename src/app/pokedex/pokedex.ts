import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../services/pokemon-service';
import { Pokemon } from '../models/pokemon';
import { PokemonCard } from '../pokemon-card/pokemon-card';

@Component({
  imports: [PokemonCard],
  selector: 'app-pokedex',
  styleUrl: './pokedex.css',
  templateUrl: './pokedex.html',
})
export class Pokedex {
  private pokemonService = inject(PokemonService);

  private readonly maxPokemons = 151;

  private readonly pageSize = 20;

  pokemons = signal<Pokemon[]>([]);

  loading = signal(false);

  constructor() {
    this.loadPokemons();
  }

  loadPokemons(): void {
    const offset = this.pokemons().length;

    if (this.loading() || offset >= this.maxPokemons) {
      return;
    }

    const limit = Math.min(this.pageSize, this.maxPokemons - offset);

    this.loading.set(true);

    this.pokemonService.getPokemons(offset, limit).subscribe((newPokemons) => {
      this.pokemons.update((list) => [...list, ...newPokemons]);
      this.loading.set(false);
    });
  }
}
