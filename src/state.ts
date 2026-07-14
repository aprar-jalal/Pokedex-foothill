import { createInterface ,type Interface } from "readline";
import { getCommands } from "./command.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State={
  rl: Interface;
  commands: Record<string, CLICommand>;
  api:PokeAPI;
  nextLocationsURL:string | null;
  prevLocationsURL: string | null;
  cache: Cache;
  pokedex: Record<string, Pokemon>;
}

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  const cache = new Cache(1000 * 60 * 5); 
  const api = new PokeAPI(cache);
  const commands = getCommands();
  return {
    rl,
    commands,
    api,
    cache,
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex:{},
  };
}