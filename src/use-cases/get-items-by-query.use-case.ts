import ProductsResponse from "../models/products-response.model";
import * as itemRepository from '../repositories/item.repository';
import InstrumentUseCase from "../instrumentation/instrumentation-use-case";

const GetItemsUseCase = async (query: string): Promise<ProductsResponse> => {
  return await InstrumentUseCase(() => itemRepository.GetItemsByQuery(query), 'GetItemsByQuery');
}

export default GetItemsUseCase
