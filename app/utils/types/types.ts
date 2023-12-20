export type Product = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category?: string;
  rating?: {
    rate?: number | undefined;
    count?: number;
  };
  stock?: number;
  quantity: number;
};
