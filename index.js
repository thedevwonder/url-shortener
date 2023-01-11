import "./src/config/env.config.js";
import "./src/config/db.config.js";
import express from "express";
import routes from "./src/routes/index.js";

const app = express();

app.use(express.json());
app.use("/", routes);

app.listen(3000, "127.0.0.1", () => {
  console.log("App is running on port : 3000");
});
