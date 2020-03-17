import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent} from './view/view.component';
import { ShowComponent } from './show/show.component';
import { Routes, RouterModule } from '@angular/router';
import { MytodoService } from './mytodo.service';

const appRoutes: Routes = [
  {path: '', component: ViewComponent},
  {path: 'view', component: ViewComponent},
  {path: 'addtask', component: EditComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'view/:id', component: ShowComponent}
];
@NgModule({
  declarations: [AppComponent, ViewComponent,EditComponent, ShowComponent],
  imports: [
  	BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MytodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
