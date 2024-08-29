import * as itemRepository from '../repositories/item.repository';
import InstrumentUseCase from "../instrumentation/instrumentation-use-case";
import ProductResponse from "../models/product-response.model";

const GetItemByIdUseCase = async (id: string): Promise<ProductResponse> => {
  return await InstrumentUseCase(() => itemRepository.GetItemById(id), 'GetItemByIdUseCase');
}

export default GetItemByIdUseCase
