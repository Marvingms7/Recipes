import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza de Carne de Sol',
      'A melhor pizza de carna de sol do mundo',
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
    new Recipe(
      'Bomba de Teresina',
      'Melhor bomba do mundo',
      'https://s2-g1.glbimg.com/Y00P_edQsqKLybzLWxjs7AQWjgA=/0x0:1920x1280/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2015/06/26/img_0349.jpg',
      [
        new Ingredient('Ovos', 6),
        new Ingredient('Trigo', 1),
        new Ingredient('Queijo', 4),
        new Ingredient('Fermento', 1),
        new Ingredient('Presunto', 2),
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
  getRecipe(index: number){
    return this.recipes[index];
  }
}

