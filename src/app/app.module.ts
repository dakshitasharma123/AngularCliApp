import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { TestComponent } from './test/test.component';
import { SubTestComponent } from './test/sub-test/sub-test.component';
import { Test1Component } from './test1/test1.component';
import { CockpitComponent } from './test1/cockpit/cockpit.component';
import { ServerElementComponent } from './test1/server-element/server-element.component';
import { LifecycleHooksComponent } from './test/lifecycle-hooks/lifecycle-hooks.component';


@NgModule({
  declarations: [AppComponent,
  HeaderComponent,
   RecipesComponent,
    RecipeListComponent,
     RecipeDetailComponent,
      RecipeItemComponent,
       ShoppingListComponent,
        ShoppingEditComponent,
         TestComponent,
          SubTestComponent,
           Test1Component,
            CockpitComponent,
             ServerElementComponent,
             LifecycleHooksComponent
             ],
  imports: [
  	BrowserModule,
  	 FormsModule
  ],
  providers: [],
  bootstrap: [TestComponent]
})
export class AppModule { }
