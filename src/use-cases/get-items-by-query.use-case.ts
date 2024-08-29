import ProductData from "../models/productData.model";
import * as itemRepository from '../repositories/item.repository';
import InstrumentUseCase from "../instrumentation/instrumentation-use-case";

const GetItemsUseCase = async (query: string): Promise<ProductData> => {
  return await InstrumentUseCase(() => itemRepository.getItemsByQuery(query), 'GetItemsByQuery');
}

export default GetItemsUseCase
