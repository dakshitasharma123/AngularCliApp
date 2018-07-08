import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService{
	ingredientChanged=new Subject<Ingredient[]>();
	startedEditing =new Subject<number>();
	private ingredients:Ingredient[]=[
	new Ingredient("apple",5)];
	getIngredient(){
		return this.ingredients.slice();
	}
	addIngredient(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients.slice());
	}
	getEditingIngredient(index:number)
	{
		return this.ingredients[index];
	}
	addIngredients(ingredients:Ingredient[]){
		/*for(let ingredient of ingredients)
		{
			this.addIngredient(ingredient);
		}*/
		this.ingredients.push(...ingredients);		
this.ingredientChanged.next(this.ingredients.slice());
	}
	updateIngredient(index:number,ingredient:Ingredient){
		this.ingredients[index]=ingredient;
		this.ingredientChanged.next(this.ingredients.slice());
	}
	deleteIngredient(index:number){
		this.ingredients.splice(index,1);
		this.ingredientChanged.next(this.ingredients.slice());
	}

}