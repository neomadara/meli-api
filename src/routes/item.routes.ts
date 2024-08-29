import { Router } from 'express';
import * as itemController from '../controllers/item.controller';
import {ValidateRequest} from "../middleware/validateRequest";
import {getItemSchema, getItemsSchema} from "../validations/item.validation";
import instrumentationMiddleware from "../middleware/instrumentation";

const router = Router();

router.get('/items', instrumentationMiddleware, ValidateRequest(getItemsSchema) ,itemController.GetItems);
router.get('/items/:id', instrumentationMiddleware, ValidateRequest(getItemSchema) ,itemController.GetItemById);

export default router
