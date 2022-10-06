import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  currecntRecipe: Recipe = new Recipe('', '', '', []);
  private _recipeServiceSubscription: Subscription = new Subscription();


  constructor(private router: Router, private activeRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscribeToRecipeService()
    this.createRecipeForm()
  }

  subscribeToRecipeService(){

    if (this.router.url.includes('edit')){
      this._recipeServiceSubscription= this.activeRoute.params.subscribe((params:Params) =>{
        this.currecntRecipe = this.recipeService.getRecipesItem(params.id);
      });
    }
  }
  
  createRecipeForm(){
    this.recipeForm =  new FormGroup({
      'recipeName' :  new FormControl(this.currecntRecipe.name, [Validators.required]), 
      'recipeDescription': new FormControl(this.currecntRecipe.description, [Validators.required]), 
      'recipeImageUrl': new FormControl(this.currecntRecipe.imageUrl, [Validators.required]), 
      'recipeIngredients': new FormArray([]),
    })
    for(let ingredient of this.currecntRecipe.ingredients){
        (<FormArray>this.recipeForm.get('recipeIngredients')).push(
          new FormGroup({
            'name' : new FormControl(ingredient.name, Validators.required), 
            'amount' : new FormControl(ingredient.amount, Validators.required)
          })
        );
    } 
  }

  addNewIngredient(){
    (<FormArray>this.recipeForm.get('recipeIngredients')).push(
      new FormGroup({
        'name' : new FormControl(null, Validators.required), 
        'amount' : new FormControl(null, Validators.required)
      })
    );
  }

  removeIngredient(index: number){
    (<FormArray>this.recipeForm.get('recipeIngredients')).removeAt(index);
  }

  recipeSubmitHandler(){ 
    console.log(this.recipeForm);
  }

  resetForm(){
    this.createRecipeForm()
  }

  ngOnDestroy(){
    this._recipeServiceSubscription.unsubscribe();
  }

}
