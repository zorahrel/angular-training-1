import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [ListComponent, ItemInputComponent, ListItemComponent],
  imports: [CommonModule],
  exports: [ListComponent, ItemInputComponent, ListItemComponent],
})
export class ComponentModule {}
