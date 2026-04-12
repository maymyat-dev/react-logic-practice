export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
  };
  images: string[];
};

export type searchParams = {
  title?: string;
  price?: number;
  category?: number;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
};
export type Filters = {
  search: string;
  minPrice?: number;
  maxPrice?: number;
  category?: number;
};