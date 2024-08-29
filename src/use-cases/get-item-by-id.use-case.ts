import ProductData from "../models/productData.model";
import * as itemRepository from '../repositories/item.repository';
import InstrumentUseCase from "../instrumentation/instrumentation-use-case";

const GetItemByIdUseCase = async (id: string): Promise<ProductData> => {
  return await InstrumentUseCase(() => itemRepository.getItemById(id), 'GetItemByIdUseCase');
}

export default GetItemByIdUseCase
