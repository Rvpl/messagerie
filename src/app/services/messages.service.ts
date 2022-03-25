import { Injectable } from '@angular/core';
import {Message} from "../modele/message";
import {user} from "../modele/user";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  public messages = new Array<Message>();


  constructor() {

  }

  public ajoutMessage(message: Message){
    let leMessage = new Message(message.message,message.auteur);
    this.messages.push(leMessage)
    console.log(leMessage)
  }

  supprimerMessage() : void {
    if(this.messages.length > 0){
      this.messages.pop();
    }
  }
}
