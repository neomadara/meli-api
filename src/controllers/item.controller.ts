import { Request, Response } from 'express';

export const getItems = async (req: Request, res: Response):Promise<any> => {
  res.status(200).json({results: []})
}
