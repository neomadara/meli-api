type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: 'new' | 'used';
  free_shipping: boolean;
};

export default Item;
