import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ItemInputComponent } from './item-input/item-input.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [ListComponent, ItemInputComponent, ListItemComponent],
  imports: [CommonModule, FormsModule, ButtonModule, TableModule],
  exports: [ListComponent, ItemInputComponent, ListItemComponent],
})
export class ComponentModule {}
