import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://receitasdepizza.com.br/wp-content/uploads/2023/02/Mito-Pizza-Carne-de-sol-com-Nata.webp',
      [
        new Ingredient('Ovos', 6),
        new Ingredient('Trigo', 1),
        new Ingredient('Queijo', 4),
        new Ingredient('Fermento', 1),
        new Ingredient('Extrato de tomate', 1),
        new Ingredient('Orégano', 1),
        new Ingredient('Carne de Sol', 2),
        new Ingredient('Manteiga', 1),
        new Ingredient('Óleo', 1)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService){

  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingrediets: Ingredient[] ){
    this.slService.addIngredients(ingrediets);
  }
}
