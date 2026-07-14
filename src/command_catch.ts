import { State } from "./state.js";

export async function commandCatch(state:State, pokemonName:string){
    if (!pokemonName) {
    console.log("Please provide a pokemon name.");
    return;
  }
  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const pokemon = await state.api.fetchPokemon(pokemonName);
const catchChance = Math.max(0.1, 1 - pokemon.base_experience / 300);

if (Math.random() < catchChance) {
  console.log(`${pokemon.name} was caught!`);
  state.pokedex[pokemon.name] = pokemon;
} else {
  console.log(`${pokemon.name} escaped!`);
}
}
