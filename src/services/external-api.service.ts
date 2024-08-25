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
