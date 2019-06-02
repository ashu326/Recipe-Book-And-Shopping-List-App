import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Burger',
            'burger looks like a burger', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvKZ2wB2zh83m3y3vmqEiMNgajr5mrTbJ6Vv3HZgFccQiMFCS',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bun', 2)
            ]),
        new Recipe(
            'Hamburger',
            'burger looks like a burger',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvKZ2wB2zh83m3y3vmqEiMNgajr5mrTbJ6Vv3HZgFccQiMFCS',
            [
                new Ingredient('Meat', 2),
                new Ingredient('Bun', 2)
            ])

      ];
      constructor(private slService: ShoppingListService) { }

      getRecipe(id: number) {
          return this.recipes[id];
      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }
}