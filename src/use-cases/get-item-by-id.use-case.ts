import ProductData from "../models/productData.model";
import * as itemRepository from '../repositories/item.repository';

const GetItemByIdUseCase = async (id: string): Promise<ProductData> => {
  return await itemRepository.getItemById(id)
}

export default GetItemByIdUseCase
