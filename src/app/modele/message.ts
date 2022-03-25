import {user} from "./user";

export class Message{
  private _message : string;
  private _auteur : user;
  private _laDate : Date;

  get date(): Date {
    return this._laDate;
  }

  set date(value: Date) {
    this._laDate = value;
  }

  constructor(message: string, auteur: user) {
    this._message = message;
    this._auteur = auteur;
    this._laDate = new Date();
  }


  get message(): string {
    return this._message;
  }

  get auteur(): user {
    return this._auteur;
  }
}
