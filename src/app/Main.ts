import {user} from "./modele/user";
import {Message} from "./modele/message";

let user1 = new user('Sheiitan');

let m1 = new Message("Yosh",user1);
let m2 = new Message("Plop",user1);

console.log(user1.message)
