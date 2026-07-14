import { commandCatch } from "./command_catch.js";
import { commandExit } from "./command_exit.js";
import { commandExplore } from "./command_explore.js";
import { commandHelp } from "./command_help.js";
import { commandInspect } from "./command_inspect.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandPokedex } from "./command_pokedex.js";
import { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    explore: {
    name: "explore",
    description: "Explore a location area",
    callback: commandExplore,
     },catch: {
  name: "catch",
  description: "Catch a pokemon",
  callback: commandCatch,
},inspect: {
  name: "inspect",
  description: "Inspect a pokemon",
  callback: commandInspect,
},pokedex: {
  name: "pokedex",
  description: "Show your pokedex",
  callback: commandPokedex,
},
     map:{
      name:"map",
       description:"Displays next locations",
       callback:commandMap
    },
    mapb:{
      name:"mapb",
      description:"Displays next locations",
      callback:commandMapb
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
  };
}