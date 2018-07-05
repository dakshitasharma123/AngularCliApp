import {EventEmitter,Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
	constructor(private shoppinglistservice:ShoppingListService){}
	private recipes:Recipe[]=[
	new Recipe(
		'Bread Cheese',
		'This Is An Indian Recipe',
		'../assets/bread-cheese.jpg',
		[
		new Ingredient("banana",5),
		new Ingredient("french fry",10)
		]
		),
	new Recipe(
		'Egg Cheese',
		'This Is An American Recipe',
		'../assets/Egg-Cheese.png',
		[
			new Ingredient("buns",2),
			new Ingredient("meat",8)
		]
		)
];
	getRecipes(){
		return this.recipes.slice();
	}
	getRecipe(index:number)
	{
		return this.recipes[index];
	}
	addIngredientToRecipeList(ingredients:Ingredient[]){
		this.shoppinglistservice.addIngredients(ingredients);

	}
}