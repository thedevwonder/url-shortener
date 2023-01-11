import mongoose from "mongoose";

const urlShortenerSchema = new mongoose.Schema({
  _id: String,
  hash: String,
  short_url: String,
  long_url: String,
});

const UrlShortenerModel = mongoose.model("Url_Shortener", urlShortenerSchema);

export default UrlShortenerModel;
