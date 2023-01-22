import app from "./app";
import Logger from "./src/utils/logger";
const port = process.env.PORT || 3000

app.listen(3001, () => Logger.info(`Server started on port ${port}`));
