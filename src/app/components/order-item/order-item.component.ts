import { Component, Input, OnInit } from '@angular/core';
import { IOrderData } from 'src/app/models/order-data.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  
  @Input() order!: IOrderData;
 
  constructor() { }

  ngOnInit(): void {
    
  }

} 
