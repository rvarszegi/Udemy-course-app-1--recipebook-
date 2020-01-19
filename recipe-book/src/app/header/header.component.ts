import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {RecipeService} from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {
  }

  ngOnInit() {

  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
