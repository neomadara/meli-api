import express, {Express, Request, Response} from "express";
import cors from "cors"
import itemRoute from './src/routes/item.routes'

const app: Express = express()

app.get('/healthz', (req: Request, res: Response) => {
  res.send('Im a live!!');
});

app.use(express.json());
app.use(cors());
app.use('/api', itemRoute)

export default app
