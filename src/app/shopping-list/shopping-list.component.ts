import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 4),
    new Ingredient('Tommato', 5),
    new Ingredient('Banana', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getNewIngredient(event: Ingredient){
    this.ingredients.push(event);
  }

}
