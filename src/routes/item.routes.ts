import { Router } from 'express';
import * as itemController from '../controllers/item.controller';
import {validateRequest} from "../middleware/validate";
import {getItemsSchema} from "../validations/item.validation";

const router = Router();

router.get('/items', validateRequest(getItemsSchema) ,itemController.getItems);

export default router
