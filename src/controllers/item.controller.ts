import { Request, Response } from 'express';
import GetItemsUseCase from '../use-cases/get-items-by-query.use-case';
import GetItemByIdUseCase from '../use-cases/get-item-by-id.use-case';

export const getItems = async (req: Request, res: Response):Promise<any> => {
  try {
    const query = req.query.q as string;
    const items = await GetItemsUseCase(query)
    res.status(200).json(items)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
}

export const getItemById = async (req: Request, res: Response):Promise<any> => {
  try {
    const id = req.params.id as string;
    const item = await GetItemByIdUseCase(id)
    res.status(200).json(item)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
}
