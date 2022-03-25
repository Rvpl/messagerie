import { Component, OnInit } from '@angular/core';
import {Message} from "../../modele/message";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  input: string = "input";
  textarea: string = "textarea";
  erreurPseudo: string = "";
  erreurMessage: string = '';
  erreurAll : string = '';


  constructor(private svc : MessagesService) {
  }

  ngOnInit(): void {
  }


  envoiMessage(value: any) : void{
    if(value.message === '' && value.auteur === ''){
      this.input = "input is-danger";
      this.textarea = "textarea is-danger";
      this.erreurAll = "Pseudo et message vides";
      this.erreurPseudo = '';
      this.erreurMessage = '';
    }else if (value.auteur === '' && value.message != ''){
      this.input = "input is-danger";
      this.textarea ="textarea";
      this.erreurPseudo = "Pseudo vide";
      this.erreurMessage = '';
      this.erreurAll = '';
    }else if(value.message === '' && value.auteur != ''){
      this.textarea = "textarea is-danger";
      this.input = "input";
      this.erreurMessage = 'Message vide';
      this.erreurPseudo = '';
      this.erreurAll = '';
    }
    else{
      let message = new Message(value.message,value.auteur);
      this.svc.ajoutMessage(message)
      value.auteur = '';
      value.message = '';
      this.input = "input";
      this.textarea = "textarea";
      this.erreurAll = '';
      this.erreurPseudo = '';
      this.erreurMessage = '';
    }
  }

  supprimerMessage() : void {
    this.svc.supprimerMessage();
  }
}
