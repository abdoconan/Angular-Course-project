import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input('detailedRecipe') recipe: Recipe;
  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipe = new Recipe('', '', '',[])
   }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(
      (resivedRecipe: Recipe) => {
        this.recipe = resivedRecipe;
      }
    );
  }

}
