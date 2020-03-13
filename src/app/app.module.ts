import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
 import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent} from './view/view.component';
import { ShowComponent } from './show/show.component';
import { Routes, RouterModule } from '@angular/router';
import { MytodoService } from './mytodo.service';

const appRoutes: Routes=[
  {path: 'show',component: ShowComponent},
  {path: 'edit',component: EditComponent},
  {path: 'view',component: ViewComponent},
  {path: 'show/:taskname',component: ShowComponent},
  {path: '',component: ViewComponent}
];
@NgModule({
  declarations: [AppComponent, ViewComponent,EditComponent, ShowComponent],
  imports: [
  	BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MytodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
