import ItemWithDetail from "../models/itemDetail.model";

const FormatItem = (itemData: any, itemDescription: any): ItemWithDetail => {
  return {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: itemData.price,
      decimals: 2,
    },
    picture: itemData.thumbnail,
    condition: itemData.condition,
    free_shipping: itemData.shipping.free_shipping,
    sold_quantity: 1,
    description: itemDescription.plain_text,
  };
}
export default FormatItem;
