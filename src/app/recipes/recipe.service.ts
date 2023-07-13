import {Injectable} from "@angular/core";
import {Recipe} from "./recipes.module";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService){}

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is a test recipe',
      'https://lh3.googleusercontent.com/OzpZ3EAQFtScM04RrgZdUp-u996Jff3Yt6qKIxWTlP0JVy5SE2hvQrTjW-AURcte7jWW0CCIIGSzcOxza1PRRg=w640-h640-c-rw-v1-e365',
      [
                new Ingredient('Meat', 2),
                new Ingredient('Eggs', 3),
                new Ingredient('Potato', 4)
      ]),
    new Recipe('More one test recipe',
      'This is more one test recipe',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F01%2Fcucumber-sandwich.jpg',
      [
        new Ingredient('Banana', 2),
        new Ingredient('Orange', 3),
        new Ingredient('Water-Melon', 4)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientToShoppingList(ingredients)
  }
}
