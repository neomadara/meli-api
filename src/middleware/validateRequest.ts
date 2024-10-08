import {AnyZodObject} from "zod";
import {Request, Response, NextFunction} from "express";

export const
  ValidateRequest =
  (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync({
          query: req.query,
          params: req.params,
        });
        return next();
      } catch (error: any) {
        return res.status(400).json(error);
      }
    };


