import { Component,OnInit, ViewChild ,OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
   @ViewChild('f') slForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;


  constructor(private shoppinglistservice:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppinglistservice.startedEditing
    .subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex=index;
        this.editedItem=this.shoppinglistservice.getEditingIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
        //console.log(this.slForm);
      }
      );

  }
  onSubmit(form:NgForm){
    const value=form.value;
    const newIngredient=new Ingredient(value.name,value.amount);
    if(this.editMode)
    {
      this.shoppinglistservice.updateIngredient(this.editedItemIndex,newIngredient);
      this.editMode=false;
    }
    else
    {
         this.shoppinglistservice.addIngredient(newIngredient);
    }
    this.slForm.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete()
  {
    this.shoppinglistservice.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

