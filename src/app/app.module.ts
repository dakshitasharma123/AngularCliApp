import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule} from '@angular/forms';
 
 import {ActiveUsersComponent } from './active-users/active-users.component';
 import {InactiveUsersComponent } from './inactive-users/inactive-users.component';

 import{ UserService } from './user.service';

import { AppComponent } from './app.component';
// import  {ServerComponent} from './server/server.component';
// import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [AppComponent,ActiveUsersComponent,InactiveUsersComponent],
  imports: [
  	BrowserModule,
  	FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
