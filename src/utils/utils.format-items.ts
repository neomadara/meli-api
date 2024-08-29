import Item from "../models/item.model";

const FormatItems = (results: any[]): Item[] => {
  return results.map(result => {
    const {
      id,
      title,
      currency_id: currency,
      sale_price,
      thumbnail: picture,
      condition,
      shipping: { free_shipping },
    } = result;

    return {
      id,
      title,
      price: {
        currency,
        amount: sale_price?.amount ?? 0,
        decimals: 1,
      },
      picture,
      condition,
      free_shipping,
    };
  });
};

export default FormatItems
