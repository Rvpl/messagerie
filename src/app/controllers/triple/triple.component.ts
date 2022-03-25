import { Component, OnInit } from '@angular/core';
import {Message} from "../../modele/message";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-triple',
  templateUrl: './triple.component.html',
  styleUrls: ['./triple.component.css']
})
export class TripleComponent implements OnInit {

  public tabRecupMessage = new Array<Message>();

  constructor(private afficher : MessagesService) {
    this.tabRecupMessage = this.afficher.messages
  }

  ngOnInit(): void {
  }

}
