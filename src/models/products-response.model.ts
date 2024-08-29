import Author from "./author.model";
import Item from "./item.model";

type ProductsResponse = {
  author: Author;
  categories: Categories[];
  items: Item[];
};

export type Categories = {
  name: string
  results: number
}

export default ProductsResponse;
