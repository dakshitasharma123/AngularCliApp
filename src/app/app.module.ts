import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
 import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent} from './view/view.component';
import { ShowComponent } from './show/show.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
  {path: 'show',component: ShowComponent},
  {path: 'edit',component: EditComponent},
  {path: 'view',component: ViewComponent}
];
@NgModule({
  declarations: [AppComponent, ViewComponent,EditComponent, ShowComponent],
  imports: [
  	BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
