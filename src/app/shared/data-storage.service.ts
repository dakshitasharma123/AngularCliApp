import {Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import {RecipeService} from '../recipes/recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from './ingredient.model';

import 'rxjs/Rx';


@Injectable()
export class DataStorageService{
	constructor(private http:Http ,private recipeservice:RecipeService,
				private shoppinglistservice:ShoppingListService){}
	storeRecipe(){
		return this.http.put('https://mydreamapp-3fcf3.firebaseio.com/recipes.json',
			this.recipeservice.getRecipes());
	}
	getRecipe(){
		return this.http.get('https://mydreamapp-3fcf3.firebaseio.com/recipes.json')
		.map((response:Response)=>{
			const recipes:Recipe[]=response.json();
			for(let recipe of recipes){
				if(!recipe['ingredients']){
					recipe['ingredients']=[];
				}
			}
			return recipes;
		})
		.subscribe((recipes:Recipe[])=>{
			this.recipeservice.setRecipes(recipes);
		});
	}
	storeShoppingList(){
		return this.http.put('https://mydreamapp-3fcf3.firebaseio.com/shopping_list.json',
			this.shoppinglistservice.getIngredient());
	}
	getShopingList(){
		return this.http.get('https://mydreamapp-3fcf3.firebaseio.com/shopping_list.json')
		.subscribe((response:Response)=>{
			const ingredient:Ingredient[]=response.json();
			this.shoppinglistservice.setIngredient(ingredient);
		});
	}
}