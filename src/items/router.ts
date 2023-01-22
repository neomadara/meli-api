import express from "express";
import validateSchema from "../utils/validateSchema";
import getItems from "./controller"
import searchAdapter from "./adapters/searchAdapter";

const router = express.Router()

router.get(
  "/items",
  validateSchema(searchAdapter),
  getItems
)

export default router
