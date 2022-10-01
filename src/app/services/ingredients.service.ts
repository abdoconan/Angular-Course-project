import { EventEmitter, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class IngredientService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 4),
        new Ingredient('Tommato', 5),
        new Ingredient('Banana', 2)
      ];
    addIngredient:Subject<Ingredient[]> = new Subject();

    getIngredients() {
        return this.ingredients.slice();
    }

    addNewIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.addIngredient.next(this.ingredients);
    }
    
}