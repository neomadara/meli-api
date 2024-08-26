import ProductData from "../models/productData.model";
import {fetchItemFromExternalApi, fetchItemsFromExternalApi} from '../services/external-api.service';
import Author from "../models/author.model";
import Item from "../models/item.model";
import ItemWithDetail from "../models/itemDetail.model";

export const getItemsByQuery = async (query: string): Promise<ProductData> => {
  const itemsData = await fetchItemsFromExternalApi(query);

  const author = createAuthor();
  const items = formatItems(itemsData.results);
  const categories = extractCategories(itemsData);

  return {
    author,
    items,
    categories,
  };
};

export const getItemById = async (id: string): Promise<any> => {
  const itemData = await fetchItemFromExternalApi(id);
  const author = createAuthor();
  const item = formatItem(itemData.item, itemData.description)

  return {
    author,
    item,
  }
}

const formatItem = (itemData: any, itemDescription: any): ItemWithDetail => {
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

const createAuthor = (): Author => {
  return {
    name: 'Cristian',
    lastname: 'Gutierrez',
  };
};

const formatItems = (results: any[]): Item[] => {
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

const extractCategories = (itemsData: any): string[] => {
  const categoryFilter = itemsData.available_filters.find((filter: any) => filter.id === 'category');
  return categoryFilter?.values.map((value: any) => value.name) || [];
};
