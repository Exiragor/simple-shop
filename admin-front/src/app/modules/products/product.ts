export class Product {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  code: string;
  description: string;
  price: string;
  img_path: string;
  specifications: Specification[];
  tags: string[];
  active: boolean;
}

export class Specification {
  name: string;
  value: any;
}
