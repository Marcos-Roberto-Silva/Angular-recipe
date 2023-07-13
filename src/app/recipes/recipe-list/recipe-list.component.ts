import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipes.module";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, CanDeactivate, Route, Router} from "@angular/router";
import {relative} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

  onNewRecipe() {
    console.log('RESULT: ',this.route)
    this.router.navigate(['new'], {relativeTo: this.route}).then()
  }
}
