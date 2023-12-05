// productTypes.ts
export interface Product {
  id: string;
  name: string;
  category: Category;

  price: string;
  image: string;
}

export type Category = "Shirts" | "Shoes" | "Pants";

