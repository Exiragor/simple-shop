import {Meta} from "../meta/meta";


export class Product {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  code: string;
  description: string;
  price: string;
  img: string;
  specifications: Specification[];
  tags: string[];
  active: boolean;
}

export class Specification {
  name: string;
  value: any;
}

export class ProductsResponse {
  data: Product[];
  meta: Meta;
}
