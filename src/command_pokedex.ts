import { State } from "./state.js";

export async function commandPokedex(state:State){
    console.log("Your Pokedex:");
    for (const pokedex in state.pokedex){
        console.log(` - ${pokedex}`);
    }
}
