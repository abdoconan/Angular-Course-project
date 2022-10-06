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
    selectedIngredient: Subject<number> = new Subject();
    getIngredients() {
        return this.ingredients.slice();
    }

    getSelectedIngredient(index:number):Ingredient {
        return this.getIngredients()[index];
    }

    addNewIngredient(ingredient:Ingredient){
        ingredient.name = ingredient.name[0].toUpperCase() + ingredient.name.substring(1).toLowerCase();
        let existingElement =  this.ingredients.find(
            (elment) => {
                return elment.name === ingredient.name
            }
        )
        if(existingElement){
            existingElement.amount +=  ingredient.amount;
        }
        else{
            this.ingredients.push(ingredient);
        }
        this.ingredients =  this.ingredients.filter(
            (elment)=>{
                return elment.amount> 0;
            }
        );
        this.addIngredient.next(this.getIngredients());

        
    }
    
}