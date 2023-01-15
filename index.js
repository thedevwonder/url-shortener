import "./src/config/env.config.js";
import "./src/config/db.config.js";
import express from "express";
import routes from "./src/routes/index.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", routes);
const port = process.env.PORT
const host = process.env.HOST
app.listen(port, host, () => {
  console.log("App is running on port : " + port);
});
