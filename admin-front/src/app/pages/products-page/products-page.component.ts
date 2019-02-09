import { Component, OnInit } from '@angular/core';
import {Product, ProductsResponse} from "../../modules/products/product";
import {ProductService} from "../../modules/products/product.service";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  fields: string[];
  products: Product[];


  constructor(private productService: ProductService) {

    this.fields = ['', 'ID', 'Name', 'Updated'];
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts(1,20)
      .subscribe((resp: ProductsResponse) => { this.products = resp.data; console.log(resp.data) });
  }

}
