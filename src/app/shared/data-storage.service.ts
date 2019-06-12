import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private hhtp: HttpClient,
                private recipeService: RecipeService) {}
    
    storeRecipes() {
        const recipes = this.recipeService.getRecipes(); 
        this.hhtp
            .put(
                "https://recipe-book-9070f.firebaseio.com/recipes.json",
                 recipes
                ).subscribe(response => {
                    console.log(response);
                });
    }
}