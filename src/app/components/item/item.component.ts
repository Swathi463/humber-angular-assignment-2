import { Component, Input, OnInit } from '@angular/core';
import { IProductData } from 'src/app/models/product-data.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() product!: IProductData;
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }
  addItemsToCart(product:IProductData){
this.productService.addItemsToCart(product);
  }
}
