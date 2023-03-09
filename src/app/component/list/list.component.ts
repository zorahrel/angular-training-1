import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() items!: Item[];
  @Output() onDelete = new EventEmitter<number>();
  deleteItem(index: number) {
    this.onDelete.emit(index);
  }
}
