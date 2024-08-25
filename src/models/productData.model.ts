import Author from "./author.model";
import Item from "./item.model";

type ProductData = {
  author: Author;
  categories: string[];
  items: Item[];
};

export default ProductData;
