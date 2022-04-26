import express from "express";
import bodyParser from "body-parser";
import { syncErrorMiddleware } from "./middlewares/errorMiddleware";

import authRouter from "./routes/authRouter";

require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(authRouter);

app.listen(PORT, () => {
  app.use(syncErrorMiddleware);
});
