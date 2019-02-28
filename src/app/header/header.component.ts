// import {Component,EventEmitter,Output} from '@angular/core';
import {Component,OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';


@Component({
	selector:'app-header',
	templateUrl:'./header.component.html',
	styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{
	clickOnRecipe=false;
	clickOnShopping=false;
	constructor(private datastorageservice:DataStorageService){}
/* @Output() featureSelected=new EventEmitter<string>();
	onSelect(feature:string)
	{
		this.featureSelected.emit(feature);
	}*/
	ngOnInit(){
		this.clickOnRecipe=true;
		//this.datastorageservice.getRecipe();
		//this.datastorageservice.getShopingList();
	}
	shoppingClick(){
		this.clickOnRecipe=false;
		this.clickOnShopping=true;
	}
	recipeClick(){
		this.clickOnRecipe=true;
		this.clickOnShopping=false;
	}
	onSaveData()
	{
		if(this.clickOnRecipe){
			this.datastorageservice.storeRecipe()
			.subscribe((response:Response)=>{
				console.log(response);
			});
		}
		else if(this.clickOnShopping)
		{
			this.datastorageservice.storeShoppingList()
			.subscribe((response:Response)=>{
				console.log(response);
			});
		}
	}
	onFetchData(){
		if(this.clickOnRecipe){
		this.datastorageservice.getRecipe();
		}
		else if(this.clickOnShopping)
		{
			this.datastorageservice.getShopingList();
		}
	}
}