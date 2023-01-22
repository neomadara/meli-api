import express, {Express} from "express";
import * as dotenv from 'dotenv'
import cors from "cors"
import itemsRoute from "./src/items/router"

const app: Express = express()

dotenv.config()

app.use(express.json());
app.use(cors());
app.use(itemsRoute);

export default app
