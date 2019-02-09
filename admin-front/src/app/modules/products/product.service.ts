import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { host } from '../request'
import {Observable} from "rxjs/internal/Observable";
import {ProductsResponse} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly endPoint: string;
  public products = [];

  constructor(private http: HttpClient) {
    this.endPoint = host + '/products';
  }

  getProducts(page, count): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.endPoint, { params: { page, count } })
  }
}
