import { UrlShortenerModel } from "../model/index.js";

class UrlShortenerDao {
  async saveUrl(docId, shortUrl, longUrl) {
    try {
      const urlShortener = new UrlShortenerModel({
        _id: docId,
        hash: docId,
        short_url: shortUrl,
        long_url: longUrl,
      });
      return new Promise((resolve, reject) => {
        urlShortener.save(function (err) {
          if (err) reject(err);
          resolve();
        });
      });
    } catch (error) {
      throw error;
    }
  }

  async getUrl(docId) {
    try {
      return await UrlShortenerModel.find({ _id: docId });
    } catch (error) {
      throw error;
    }
  }
}

const urlShortenerDao = new UrlShortenerDao();
export default urlShortenerDao;
