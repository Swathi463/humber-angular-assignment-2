import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IOrderData } from '../models/order-data.interface';
import { IProductData } from '../models/product-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   listOfProducts: IProductData[]= [];
  cartItems:IProductData[] = [];
  copyListOfProducts: IProductData[] = [];

  constructor(private http:HttpClient) { }

  getProducts():Observable<IProductData[]> {
    // http call to retrieve list of products
   return this.http.get<IProductData[]>('../../assets/product-data.json')
   .pipe(
    map(
      (products) =>
        (this.listOfProducts = this.copyListOfProducts = products)
    ));
  };  

  getOrderData():Observable<IOrderData[]> {
    // http call to retrieve list of orders
    return this.http.get<IOrderData[]>('../../assets/order-data.json');

  }

  clearCart() {
    this.cartItems = [];
  }
  addItemsToCart(item: IProductData) {
   
    // if (!(this.cartItems.find(items=>item.name = item.name))) {
      this.cartItems.push(item);

    // }
  }

  filterProducts(name: string) {
    if (name) {
      this.listOfProducts = this.listOfProducts.filter((listItem) =>
        listItem.name.includes(name)
      );
    } else {
      this.listOfProducts = this.copyListOfProducts;
    }
  }
}
