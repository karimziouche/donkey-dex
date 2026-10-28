import { Routes } from '@angular/router';
import { Pokedex } from './pokedex/pokedex';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';

export const routes: Routes = [
  { path: '', component: Pokedex },
  { path: 'pokemon/:id', component: PokemonDetail }
];
