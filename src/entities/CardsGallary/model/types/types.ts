export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  description: string;
  discountPercentage: number;
  rating: number;
  category: Category;
  stock: number;
  brand: string;
}
