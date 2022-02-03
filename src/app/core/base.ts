import { Globals } from "./global";
export class Base extends Globals {
    constructor(){
        super();
    }
    log(message?:any){
        console.log(message);
    }
}