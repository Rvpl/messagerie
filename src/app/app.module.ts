import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnteteComponent } from './controllers/entete/entete.component';
import { ActivesComponent } from './controllers/actives/actives.component';
import { TripleComponent } from './controllers/triple/triple.component';
import { NewComponent } from './controllers/new/new.component';
import {FormsModule} from "@angular/forms";
import { InfoComponent } from './controllers/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    ActivesComponent,
    TripleComponent,
    NewComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
