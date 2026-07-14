import { State } from "./state.js";

export async function commandExplore(state:State, locationName?: string){
    if (!locationName) {
    console.log("Please provide a location area.");
    return;}
    console.log(`Exploring ${locationName}...`);
    const location = await state.api.fetchLocation(locationName);
    console.log("Found Pokemon:");
    location.pokemon_encounters.forEach((encounter) => {
    console.log(` - ${encounter.pokemon.name}`);
});
}
