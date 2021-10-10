export interface ICard {
  sys: {
    id: string;
  };
  title: string;
  price: string;
  description?: string;
  itemImage?: {
    url?: string;
  };
  path: string;
}
