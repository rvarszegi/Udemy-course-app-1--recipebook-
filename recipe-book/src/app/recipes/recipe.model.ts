import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredient: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredient;
  }
}
