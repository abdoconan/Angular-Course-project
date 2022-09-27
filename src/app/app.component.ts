import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  exposeShoppingList =  false;

  updateExposeShoppingList(event:boolean): void {
    this.exposeShoppingList = event
  }
}
