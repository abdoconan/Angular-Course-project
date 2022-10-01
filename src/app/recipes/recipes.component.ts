import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';


import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  detailRecipeElement: Recipe;

  constructor(private recipeService: RecipeService ) {
    this.detailRecipeElement = new Recipe('', '', '', []);
   }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (resivedRecipe: Recipe) => {
        this.detailRecipeElement = resivedRecipe;
      }
    );
  }

}
