import { Component, Input, OnInit } from '@angular/core';
import { IProductData } from 'src/app/models/product-data.interface';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product!: IProductData;
  constructor() { }

  ngOnInit(): void {
  }

}
