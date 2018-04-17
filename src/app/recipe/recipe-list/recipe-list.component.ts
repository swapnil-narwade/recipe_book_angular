import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes : Recipe[] = [
  new Recipe(
    'Test recipe',
    'This is just a dummy recipe',
    'https://i1.wp.com/fatgirlskinny.net/wp-content/uploads/2017/10/thai-spring-beef-stir-fry-video.jpg'
  )
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
