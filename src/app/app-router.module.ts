import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeFormComponent } from "./recipes/recipe-form/recipe-form.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    {
        path:"shoppinglist",
        component: ShoppingListComponent
    },
    {
        path:"Recipes",
        component: RecipesComponent,
        children: [
            {
                path:"details", 
                component: RecipeDetailComponent
            },
            {
                path:"form", 
                component: RecipeFormComponent
            },
        ]
    },
    {
        path:"**",
        redirectTo: '/Recipes',
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ], 
    exports :[RouterModule]
})
export class AppRouterModule {
}