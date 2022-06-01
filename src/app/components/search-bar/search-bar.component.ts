import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() textEntered: EventEmitter<string> = new EventEmitter()
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    
    }
    onSearch(event:  any) {
     this.textEntered.emit(event.target.value);
  }

}
