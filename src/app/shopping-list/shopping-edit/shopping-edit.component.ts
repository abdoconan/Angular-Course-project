import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientService } from 'src/app/services/ingredients.service';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('inputName', { static: true }) inputName: ElementRef;
  // @ViewChild('inputAmount', { static: true }) inputAmount: ElementRef;
  @ViewChild('IngredientsForm') IngredientsForm: NgForm;
  @Output('savedIngredient') ingredient = new EventEmitter();

  
  constructor(private ingredientService: IngredientService) {
    // this.inputName =new ElementRef('');
    // this.inputAmount =new ElementRef('');
   }

  ngOnInit(): void {
    this.ingredientService.selectedIngredient.subscribe(
      (index: number) => {
        let selectedIngredient: Ingredient =  (<Ingredient>this.ingredientService.getSelectedIngredient(index))
        this.IngredientsForm.setValue({
          name: selectedIngredient.name, 
          amount: selectedIngredient.amount
        })
      }
    );
  }

  submitIngredientsForm(operation: '+'| '-'){
    if(operation === '+'){
      this.ingredient.emit(new Ingredient(this.IngredientsForm.value['name'], this.IngredientsForm.value['amount']));
    }
    else{
      this.ingredient.emit(new Ingredient(this.IngredientsForm.value['name'], -1 * this.IngredientsForm.value['amount']));
    }
    
    this.resetForm()
  }

  resetForm(){
    this.IngredientsForm.reset()
  }

}
