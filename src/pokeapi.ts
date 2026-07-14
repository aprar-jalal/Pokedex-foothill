import { Cache } from "./pokecache.js";
export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
 private cache: Cache;
  constructor(cache:Cache) {
    this.cache=cache;
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
     const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
     const cached = this.cache.get<ShallowLocations>(url);
    if(cached){
        return cached;
     }
        const response =await fetch(url);
     if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.status}`);
    }

    return await response.json();
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached =this.cache.get<Location>(url);
    if(cached){
        return cached;
    }
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch location`);
    }
    return await response.json();
  }

  async  fetchPokemon(name: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${name}`;
    const cached =this.cache.get<Pokemon>(url);
    if(cached){
      return cached;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon`);
    }
    const data:Pokemon= await response.json();
    this.cache.add(url,data);
    return data;
}
}


export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonEncounter = {
  pokemon: {
    name: string;
    url: string;
  };
};

export type Location = {
  id: number;
  name: string;
  pokemon_encounters: PokemonEncounter[];
};
export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;

  height: number;
  weight: number;

  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];

  types: {
    type: {
      name: string;
    };
  }[];
};