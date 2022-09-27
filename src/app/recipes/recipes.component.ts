import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  detailRecipeElement: Recipe;

  constructor() {
    this.detailRecipeElement = new Recipe('', '', '');
   }

  ngOnInit(): void {
  }

  getDetailsRecepie(recipe: Recipe) {
    this.detailRecipeElement = recipe;
  }

}
