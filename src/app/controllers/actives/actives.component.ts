import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {Message} from "../../modele/message";

@Component({
  selector: 'app-actives',
  templateUrl: './actives.component.html',
  styleUrls: ['./actives.component.css']
})
export class ActivesComponent implements OnInit {

  public personnes  = new Array<Message>();

  constructor(private afficher : MessagesService) {
    this.personnes = this.afficher.messages
  }

  ngOnInit(): void {
  }





}
