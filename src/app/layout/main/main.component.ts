import { Component } from '@angular/core';
import { ToBuyService } from 'src/app/service/to-buy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private toBuyService: ToBuyService) {}

  ngOnInit() {
    this.addSample();
  }

  getItems() {
    return this.toBuyService.toBuy;
  }

  addSample() {
    this.toBuyService.addItem({
      title: 'Percoca',
      quantity: Math.floor(Math.random() * 100),
    });
  }

  addItem(item: Item) {
    this.toBuyService.addItem(item);
  }
}
