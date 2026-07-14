import { createInterface ,type Interface } from "readline";
import { getCommands } from "./command.js";
import { State } from "./state.js";

export function cleanInput(input:string):string[]{
  return input.toLowerCase().trim().split(/\s+/);
}
export function startREPL(state:State) {
 
  state.rl.prompt();
  state.rl.on("line",(input)=>{
    const words=cleanInput(input);
    if(words.length ===0){
      state.rl.prompt();
      return;
    }
    const commandName=words[0];
    const args = words.slice(1);
    const command =state.commands[commandName];
    if(!command){
      console.log("Unknown command");
      state.rl.prompt();
      return;
    }
    try {
   command.callback(state,...args);
} catch (err) {
  console.error(err);
}
    state.rl.prompt();
  })

}
