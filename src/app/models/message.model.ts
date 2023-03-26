import { User } from "./user.model";

export class Message {    
    
    constructor(public id:number, public text:string, public date:Date, public userId:number, public userEmail:string) {}
    
}
