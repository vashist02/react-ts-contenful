export interface ICard {
  sys: {
    id: string
  };
  title: string;
  price: string;
  itemImage?: { 
    url?: string 
  };
  path: string
}
