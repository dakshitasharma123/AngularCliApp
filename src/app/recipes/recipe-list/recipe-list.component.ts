import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes=[
	new Recipe('Egg-cheese','This is an indian recipe','../assets/Egg-Cheese.png'),
	new Recipe('bread-cheese','This is a American recipe','../assets/bread-cheese.jpg')];
 constructor() { }

  ngOnInit() {
  }

}
