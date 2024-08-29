import { jest } from '@jest/globals';
import GetItemByIdUseCase from '../../../src/use-cases/get-item-by-id.use-case';
import * as itemRepository from '../../../src/repositories/item.repository';
import ProductData from '../../../src/models/productData.model';

jest.mock('../../../src/repositories/item.repository');

describe('GetItemByIdUseCase', () => {
  const mockId = 'test-id';
  const mockProductData: ProductData = {
    author: { name: 'Cristian', lastname: 'Gutierrez' },
    items: [],
    categories: []
  };

  it('should return product data when id is found', async () => {
    // @ts-ignore
    (itemRepository.getItemById as jest.Mock).mockResolvedValue(mockProductData);
    const result = await GetItemByIdUseCase(mockId);
    console.log(result)
    expect(itemRepository.getItemById).toHaveBeenCalledWith(mockId);
  });

  it('should throw an error when id is not found', async () => {
    const mockError = new Error('Item not found');
    // @ts-ignore
    (itemRepository.getItemById as jest.Mock).mockResolvedValue(mockProductData);

    const result = await GetItemByIdUseCase(mockId);

    expect(result).toEqual(mockProductData);
    // @ts-ignore
    (itemRepository.getItemById as jest.Mock).mockRejectedValue(mockError);

    await expect(GetItemByIdUseCase(mockId)).rejects.toThrow('Item not found');
    expect(itemRepository.getItemById).toHaveBeenCalledWith(mockId);
  });
});
