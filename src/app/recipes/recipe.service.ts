import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://receitasdepizza.com.br/wp-content/uploads/2023/02/Mito-Pizza-Carne-de-sol-com-Nata.webp'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
