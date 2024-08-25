import ProductData from "../models/productData.model";
import * as itemRepository from '../repositories/item.repository';

const GetItemsUseCase = async (query: string): Promise<ProductData> => {
  return await itemRepository.getItemsByQuery(query)
}

export default GetItemsUseCase
