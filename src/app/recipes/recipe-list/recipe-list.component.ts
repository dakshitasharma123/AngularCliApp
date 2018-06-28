import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected=new EventEmitter<Recipe>();
	recipes=[
	new Recipe('Bread Cheese','This Is An Indian Recipe','../assets/bread-cheese.jpg'),
	new Recipe('Egg Cheese','This Is An American Recipe','../assets/Egg-Cheese.png'),
	new Recipe('Egg Cheese','This Is An American Recipe','../assets/Egg-Cheese.png'),
	new Recipe('Bread Cheese','This Is An Indian Recipe','../assets/bread-cheese.jpg')];
 constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipeSelected:Recipe){
	this.recipeWasSelected.emit(recipeSelected);

}
}
