import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { EvenComponent } from './even/even.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import {BasicHighlightDirective} from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './user.service';


@NgModule({
  declarations: [
  AppComponent,
   EvenComponent,
    GameControlComponent,
     OddComponent,
      BasicHighlightDirective,
      BetterHighlightDirective,
      HomeComponent,
      UserComponent
      ],
  imports: [
  	BrowserModule,
  	 FormsModule,
     AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
