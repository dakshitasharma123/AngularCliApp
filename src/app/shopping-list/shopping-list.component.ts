import { Component, OnInit,OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
	ingredients:Ingredient[];
  subscription:Subscription;
  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppinglistservice.getIngredient();
    this.subscription =this.shoppinglistservice.ingredientChanged
    .subscribe((ingredient:Ingredient[])=>{
      this.ingredients=ingredient;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number)
  {
    this.shoppinglistservice.startedEditing.next(index);
  }

}
