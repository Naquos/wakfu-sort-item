import { Component } from '@angular/core';
import { ItemTypesComponent } from '../item-types/item-types.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemLevelComponent } from "../item-level/item-level.component";
import { RareteItemComponent } from "../rarete-item/rarete-item.component";
import { FilterMaitrisesComponent } from "../filter-maitrises/filter-maitrises.component";
import { SortChoiceComponent } from "../sort-choice/sort-choice.component";
import { OnlyNoSecondaryComponent } from "../only-no-secondary/only-no-secondary.component";

@Component({
  selector: 'app-root',
  imports: [ItemListComponent, ItemTypesComponent, ItemLevelComponent, RareteItemComponent, FilterMaitrisesComponent, SortChoiceComponent, OnlyNoSecondaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public idsItemType: number[] = [];
  public rarete: number[] = [];
  public levelMin: number = 200;
  public levelMax: number = 245;
}
