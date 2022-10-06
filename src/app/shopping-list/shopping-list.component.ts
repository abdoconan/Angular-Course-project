import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IngredientService } from '../services/ingredients.service';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private _ingredientServiceSubscription: Subscription = new Subscription();
  // private _selectedIngredient: Subscription = new Subscription();

  constructor(private ingredientService: IngredientService) {
    this.ingredients = [];
   }

  ngOnInit(): void {
    this.ingredients =  this.ingredientService.getIngredients();
    this._ingredientServiceSubscription =  this.ingredientService.addIngredient.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }

  getNewIngredient(event: Ingredient){
    this.ingredientService.addNewIngredient(event);
  }
  selectIngredient(index: number){
    this.ingredientService.selectedIngredient.next(index)
  }

  ngOnDestroy() {
    this._ingredientServiceSubscription.unsubscribe();
    // this._selectedIngredient.unsubscribe();

  }

}
