import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredients.service';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingredientService: IngredientService) {
    this.ingredients = [];
   }

  ngOnInit(): void {
    this.ingredients =  this.ingredientService.getIngredients();
    this.ingredientService.addIngredient.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

  getNewIngredient(event: Ingredient){
    this.ingredientService.addNewIngredient(event);
  }

}
