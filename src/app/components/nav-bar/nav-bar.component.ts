import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() title = '';
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
  }
onSearch(text : string){
  this.productService.filterProducts(text);
}
}
