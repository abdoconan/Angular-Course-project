import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import  { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [];
  // @Output('detailsRecepie') returnedRecipe = new EventEmitter();

  constructor(private recipeService: RecipeService) { 
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipesList();
  }

  getDetailsRecepie(index: number) {
    this.recipeService.selectedRecipe.emit(
      this.recipes[index]
    );
    // this.returnedRecipe.emit(this.recipes[index]);
  }

}
