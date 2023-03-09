import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-input',
  templateUrl: './item-input.component.html',
  styleUrls: ['./item-input.component.css'],
})
export class ItemInputComponent {
  @Output() onNewItem = new EventEmitter<Item>();

  onSubmit() {
    // Ricevuto dal form
    const value: Item = {
      title: 'Percoca',
      quantity: Math.floor(Math.random() * 100),
    };

    this.onNewItem.emit(value);
  }
}
