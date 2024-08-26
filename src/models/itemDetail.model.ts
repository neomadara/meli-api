import Item from "./item.model";

type detailItem = {
  sold_quantity: number,
  description: string
}

type ItemWithDetail = Item & detailItem

export default ItemWithDetail;
