import { urlShortenerDao } from "../dao/index.js";
import {
  generateRandomTwoDigitNumber,
  getBase62Char,
  response,
} from "../helpers/index.js";

class UrlShortenerService {
  async createShortLink(longUrl) {
    try {
      const randomString = new Array(7).fill(0);
      randomString.forEach((ele, index) => {
        const randomNumber = generateRandomTwoDigitNumber(1, 62);
        randomString[index] = getBase62Char(randomNumber);
      });
      const docId = randomString.join("");
      const baseUrl = process.env.BASE_SHORT_URL;
      const shortUrl = baseUrl.toString() + docId.toString();

      await urlShortenerDao.saveUrl(docId, shortUrl, longUrl);

      return response(true, shortUrl, "Short Url Generated");
    } catch (error) {
      if (error.code && error.code == 11000)
        return response(false, {}, "Glitch in the Matrix. Please Try Again");
      throw error;
    }
  }

  async getOriginalUrl(docId) {
    try {
      const [data] = await urlShortenerDao.getUrl(docId);
      return response(true, data.long_url, "Original Url Fetched");
    } catch (error) {
      throw error;
    }
  }
}

const urlShortenerService = new UrlShortenerService();
export default urlShortenerService;
