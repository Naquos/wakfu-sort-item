import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { RecipeResult } from "../models/recipeResult";
import recipeResult from "../../../public/recipeResults.json";

@Injectable({providedIn: 'root'})
export class RecipeResultsService {
    private recipeResults = new BehaviorSubject<RecipeResult[]>([]);
    public recipeResults$ = this.recipeResults.asObservable();

    constructor() {
        const result: RecipeResult[] = [];
        (recipeResult as [any]).forEach(x => result.push({
            recipeId: x.recipeId,
            productedItemId: x.productedItemId,
            productOrder: x.productOrder,
            productedItemQuantity: x.productedItemQuantity
        }))

        this.recipeResults.next(result);
    }
}