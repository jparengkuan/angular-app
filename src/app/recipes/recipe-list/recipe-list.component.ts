import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // Een lege recepten array van het type Recipe (model)
  recipes: Recipe[] = [
    new Recipe(
      'Lasagne',
      'een klassiek en eenvoudig ovenpastagerecht',
      'https://i0.wp.com/marielleindekeuken.nl/wp-content/uploads/2018/03/Lasagne.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
