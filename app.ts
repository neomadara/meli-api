import express, {Express} from "express";
import Logger from "./src/utils/logger";
import * as dotenv from 'dotenv'
import cors from "cors"

const app: Express = express()
const port = process.env.PORT || 3000

dotenv.config()

app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    app.listen(port, () => Logger.info(`Server started on port ${port}`));
  } catch (error) {
    Logger.error(`Error: ${error}`)
    process.exit(1);
  }
};

export default startServer
