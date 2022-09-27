import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('navegateShoppingList') shoppingListClicked = new EventEmitter();
  shoppingListClickedFlag: boolean;

  constructor() { 
    this.shoppingListClickedFlag = true;
  }

  ngOnInit(): void {
  }

  trueShoppingListClicked() {
    this.shoppingListClickedFlag= true;
    this.shoppingListClicked.emit(this.shoppingListClickedFlag);
  }
  falseShoppingListClicked() {
    this.shoppingListClickedFlag= false;
    this.shoppingListClicked.emit(this.shoppingListClickedFlag);
  }



}
