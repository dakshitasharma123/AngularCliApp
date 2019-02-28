import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService{
	ingredientChanged=new Subject<Ingredient[]>();
	startedEditing =new Subject<number>();
	private ingredients:Ingredient[]=[
	new Ingredient("apple",5)];
	getIngredient(){
		return this.ingredients;
	}
	addIngredient(ingredient:Ingredient){
		this.ingredients.push(ingredient);
		this.ingredientChanged.next(this.ingredients);
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
this.ingredientChanged.next(this.ingredients);
	}
	updateIngredient(index:number,ingredient:Ingredient){
		this.ingredients[index]=ingredient;
		this.ingredientChanged.next(this.ingredients);
	}
	deleteIngredient(index:number){
		this.ingredients.splice(index,1);
		this.ingredientChanged.next(this.ingredients);
	}
	setIngredient(ingredient:Ingredient[]){
		this.ingredients=ingredient;
		this.ingredientChanged.next(this.ingredients);
	}

}