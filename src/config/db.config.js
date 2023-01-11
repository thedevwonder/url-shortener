import mongoose from "mongoose";

const userName = process.env.USERNAME;
const password = process.env.PASSWORD;
const dbName = process.env.DB_NAME;
const mongoUri = `mongodb+srv://${userName}:${password}@therobin.tpxchls.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);
const db = mongoose.connection;

db.on("error", console.error.bind("connection failed"));
db.once("open", function () {
  console.log("Database Live");
});
