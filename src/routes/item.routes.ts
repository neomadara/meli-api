import { Router } from 'express';
import * as itemController from '../controllers/item.controller';
import {validateRequest} from "../middleware/validate";
import {getItemSchema, getItemsSchema} from "../validations/item.validation";
import instrumentationMiddleware from "../middleware/instrumentation";

const router = Router();

router.get('/items', instrumentationMiddleware, validateRequest(getItemsSchema) ,itemController.getItems);
router.get('/items/:id', instrumentationMiddleware, validateRequest(getItemSchema) ,itemController.getItemById);

export default router
