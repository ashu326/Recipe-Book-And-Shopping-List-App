import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Burger', 'burger looks like a burger', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvKZ2wB2zh83m3y3vmqEiMNgajr5mrTbJ6Vv3HZgFccQiMFCS'),
    new Recipe('Hamburger', 'burger looks like a burger', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvKZ2wB2zh83m3y3vmqEiMNgajr5mrTbJ6Vv3HZgFccQiMFCS')

  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
