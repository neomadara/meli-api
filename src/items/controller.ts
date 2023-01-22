import {Response, Request, NextFunction} from "express";
import Logger from "../utils/logger";

const getResumeByEmail =  async (req: Request, res: Response, _next: NextFunction): Promise<Response> => {
  try {
    const {search} = req.query
    Logger.info(`search items by ${search}`)
    return res.status(200)
  } catch (error) {
    Logger.error(`Items search error ${error}`)
    return res.status(500).json(error)
  }
}

export default getResumeByEmail
