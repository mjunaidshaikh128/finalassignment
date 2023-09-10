import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((result) => {
      // console.log(result);
      this.products = result;
      console.log(this.products);
    });
  }


  constructor(private productService: ProductService) { }




}
