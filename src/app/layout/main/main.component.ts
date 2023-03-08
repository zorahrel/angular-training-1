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
    this.toBuyService.addItem({
      title: 'Percoca',
      quantity: 2,
    });
  }

  getItems() {
    return this.toBuyService.toBuy;
  }
}
