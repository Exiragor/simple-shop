import { Component, OnInit } from '@angular/core';
import { getProducts } from '../modules/products/product.service'
import {Product} from "../modules/products/product";
import {Table} from "../modules/table/table";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  fields: {name: string, code: string}[];
  values: Product[];
  fieldNames: string[];
  fieldCodes: string[];
  table: Table;


  constructor() {
    this.fields = [
      { name: '', code: 'img_path' },
      { name: 'ID', code: 'id' },
      { name: 'Name', code: 'name' },
      { name: 'Updated', code: 'updated_at' }
    ];

    this.fieldNames = this.fields.map(f => f.name);
    this.fieldCodes = this.fields.map(f => f.code);
    this.table = {
      values: this.values,
      select: this.fieldCodes
    }
  }

  async ngOnInit() {
    let { data } = await getProducts();
    this.values = data.data;
    this.table.values = this.values;
  }

}
