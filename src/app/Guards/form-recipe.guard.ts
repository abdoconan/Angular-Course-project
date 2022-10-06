import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../services/recipe.service";

@Injectable()
export class FormRecipeGuard implements CanActivate {
    constructor(private recipeService: RecipeService, private recipe:Recipe){
        this.recipeService.selectedRecipe.subscribe(recipe => {
            this.recipe =  recipe;
        })
    }


    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean | Observable<boolean>| Promise<boolean> {

            if(typeof this.recipe !== null) {
                return true;
            }
            return false;
        }
}