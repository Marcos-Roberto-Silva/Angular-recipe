import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl('Marcos'),
      imagePath: new FormControl('www/image.com'),
      description: new FormControl('Hello world!')
    });

    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.editMode = params['id'] != null;
    })
  }

  onSubmit() {
    console.log(this.recipeForm)
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe =  this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.imagePath
      recipeDescription = recipe.description
        if (recipe['ingredients']) {
          for (let ingredient of recipe.ingredients) {
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name),
                'amount': new FormControl(ingredient.amount)
              })
            );
          }
      }

        this.recipeForm = new FormGroup({
          'name': new FormControl(recipeName),
          'imagePath': new FormControl(recipeImagePath),
          'description': new FormControl(recipeDescription),
          'ingredients': recipeIngredients
        })
    }
  }
}
