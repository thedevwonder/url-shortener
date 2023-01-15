import { urlShortenerService } from "../services/index.js";

class UrlShortener {
  async getUrl(req, res) {
    try {
      const { id } = req.params;
      const response = await urlShortenerService.getOriginalUrl(id);
      if (response.success) return res.redirect(response.data);
      return res
        .status(400)
        .send({ data: response.data, message: response.message });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ data: {}, message: "Something Went Wrong. We are sorry!" });
    }
  }

  async createShortLink(req, res) {
    try {
      const { JSONString } = req.body;
      const { url } = JSON.parse(JSONString);
      const response = await urlShortenerService.createShortLink(url.trim());
      if (response.success)
        return res
          .status(200)
          .send({ data: response.data, message: response.message });
      return res
        .status(400)
        .send({ data: response.data, message: response.message });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ data: {}, message: "Something Went Wrong. We are sorry!" });
    }
  }
}

const urlshortener = new UrlShortener();
export default urlshortener;
