export interface ProductImage {
  url: string;
  name: string;
}

export interface Product {
  name: string;
  number: string;
  description: string;
  images: ProductImage[];
}