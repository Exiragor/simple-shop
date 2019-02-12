import { Component, OnInit } from '@angular/core';
import {Product, ProductsResponse} from "../../modules/products/product";
import {ProductService} from "../../modules/products/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  fields: string[];
  products: Product[];
  lastPage: number;
  currentPage: number;


  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.fields = ['', 'ID', 'Name', 'Updated'];
  }

  ngOnInit() {
    this.getCurrentPage();
    this.getProducts();

    this.route.url.subscribe(url => {
      this.getCurrentPage();
      this.getProducts();
    });
  }

  getProducts() {
    this.productService.getProducts(this.currentPage,20)
      .subscribe((resp: ProductsResponse) => {
        this.products = resp.data;
        this.lastPage = resp.meta.last_page;
      });
  }

  onChangePage(page: number) {
    this.router.navigate(['/products', page]);
  }

  getCurrentPage() {
    this.currentPage = +this.route.snapshot.paramMap.get('page')
  }
}
