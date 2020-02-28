import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { EditClass} from './edit/edit.component';
import {ViewClass} from './view/view.component';



import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';


@NgModule({
  declarations: [AppComponent, VoteComponent, EditClass, ViewClass],
  imports: [
  	BrowserModule,
  	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
