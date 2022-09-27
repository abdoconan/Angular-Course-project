import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName', { static: true }) inputName: ElementRef;
  @ViewChild('inputAmount', { static: true }) inputAmount: ElementRef;
  @Output('savedIngredient') ingredient = new EventEmitter();
  constructor() {
    this.inputName =new ElementRef('');
    this.inputAmount =new ElementRef('');
   }

  ngOnInit(): void {
  }

  saveIngredient(){
    this.ingredient.emit(new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value));
  }

}
