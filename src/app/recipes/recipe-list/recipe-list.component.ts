import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import  { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Test Recipe', 'This is just for testing the model',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe('Test Recipe second', 'This is just for testing the model',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
  ];

  @Output('detailsRecepie') returnedRecipe = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  getDetailsRecepie(index: number) {
    this.returnedRecipe.emit(this.recipes[index]);
  }

}
