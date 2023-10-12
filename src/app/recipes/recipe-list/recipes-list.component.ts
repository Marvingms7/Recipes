import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://s2-g1.glbimg.com/Y00P_edQsqKLybzLWxjs7AQWjgA=/0x0:1920x1280/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2015/06/26/img_0349.jpg'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
}
