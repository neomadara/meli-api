import ProductsResponse, {Categories} from "../models/products-response.model";
import {fetchItemFromExternalApi, fetchItemsFromExternalApi} from '../services/external-api.service';
import FormatItem from "../utils/utils.format-item";
import CreateAuthor from "../utils/utils.create-author";
import FormatItems from "../utils/utils.format-items";
import ProductResponse from "../models/product-response.model";

export const GetItemsByQuery = async (query: string): Promise<ProductsResponse> => {
  const itemsData = await fetchItemsFromExternalApi(query);

  const author = CreateAuthor();
  const items = FormatItems(itemsData.results);
  const categories = ExtractCategories(itemsData);

  return {
    author,
    items,
    categories,
  };
};

export const GetItemById = async (id: string): Promise<ProductResponse> => {
  const itemData = await fetchItemFromExternalApi(id);
  const author = CreateAuthor();
  const item = FormatItem(itemData.item, itemData.description)

  return {
    author,
    item,
  }
}

const ExtractCategories = (itemsData: any): Categories[] => {
  const categoryFilter = itemsData.available_filters.find((filter: any) => filter.id === 'category');
  return categoryFilter?.values
    .sort((a: any, b: any) => b.results - a.results)
    .map((value: any) => ({ name: value.name, results: value.results })) || [];
};
