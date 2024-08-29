import { jest } from '@jest/globals';
import GetItemsUseCase from '../../../src/use-cases/get-items-by-query.use-case';
import * as itemRepository from '../../../src/repositories/item.repository';
import ProductData from '../../../src/models/productData.model';

jest.mock('../../../src/repositories/item.repository');

describe('GetItemsUseCase', () => {
  const mockQuery = 'test query';
  const mockProductData: ProductData = {
    author: { name: 'Cristian', lastname: 'Gutierrez' },
    items: [],
    categories: []
  };

  it('should return product data when query is successful', async () => {
    // @ts-ignore
    (itemRepository.getItemsByQuery as jest.Mock).mockResolvedValue(mockProductData);

    const result = await GetItemsUseCase(mockQuery);

    expect(result).toEqual(mockProductData);
    expect(itemRepository.getItemsByQuery).toHaveBeenCalledWith(mockQuery);
  });

  it('should throw an error when query fails', async () => {
    const mockError = new Error('Query failed');
    // @ts-ignore
    (itemRepository.getItemsByQuery as jest.Mock).mockRejectedValue(mockError);

    await expect(GetItemsUseCase(mockQuery)).rejects.toThrow('Query failed');
    expect(itemRepository.getItemsByQuery).toHaveBeenCalledWith(mockQuery);
  });
});
