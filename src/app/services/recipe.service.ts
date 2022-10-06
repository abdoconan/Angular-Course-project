import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
    private RecipesList: Recipe[]
    selectedRecipe: Subject<Recipe> =  new Subject();

    constructor(){
        this.RecipesList =[
            new Recipe('Test Recipe', 'This is just for testing the model',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    [
        new Ingredient('Bread', 2), 
        new Ingredient('Meat', 1), 
        new Ingredient('tomato', 3), 
        
    ]),
            new Recipe('Test Recipe second', 'This is just for testing the model',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    [
        new Ingredient('loof', 3), 
        new Ingredient('chiken', 1)
        
    ]),
        ];
    }

    getRecipesList(){
        return this.RecipesList.slice();
    }
    getRecipesItem(index:number):Recipe{
        return this.RecipesList.slice()[index];
    }
    
}