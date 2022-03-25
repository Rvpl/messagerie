import {Message} from "./message";

export class user {

  private _pseudo: string;
  private _message = new Array<Message>();

  constructor(pseudo: string) {
    this._pseudo = pseudo;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get message(): Message[] {
    return this._message;
  }
}
