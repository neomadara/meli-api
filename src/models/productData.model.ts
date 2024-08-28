import Author from "./author.model";
import Item from "./item.model";

type ProductData = {
  author: Author;
  categories: Categories[];
  items: Item[];
};

export type Categories = {
  name: string
  results: number
}

export default ProductData;
