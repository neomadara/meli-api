import axios from 'axios';

export const fetchItemsFromExternalApi = async (query: string) => {
  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching item with query ${query}: ${error.message}`);
    } else {
      throw new Error(`Error fetching item with query ${query}: An unknown error occurred`);
    }
  }
};

export const fetchItemFromExternalApi = async (id: string) => {
  try {
    const [itemResponse, descriptionResponse] = await Promise.allSettled([
      axios.get(`https://api.mercadolibre.com/items/${id}`),
      axios.get(`https://api.mercadolibre.com/items/${id}/description`)
    ]);

    const itemData = itemResponse.status === 'fulfilled' ? itemResponse.value.data : null;
    const descriptionData = descriptionResponse.status === 'fulfilled' ? descriptionResponse.value.data : null;

    if (!itemData || !descriptionData) {
      throw new Error(`Error fetching item with ID ${id}`);
    }

    return {
      item: itemData,
      description: descriptionData
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching item with ID ${id}: ${error.message}`);
    } else {
      throw new Error(`Error fetching item with ID ${id}: An unknown error occurred`);
    }
  }
};
