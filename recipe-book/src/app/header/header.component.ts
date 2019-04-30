import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  onselect(feature: string) {
    this.featureSelected.emit(feature);
  }
  constructor() { }

  ngOnInit() {
  }

}
