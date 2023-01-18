import http from "../http-common";
import ITunesElementType from "../types/iTunesElement.type";

class ITunesElementService {
  getAll(searchTerms: string) {
    return http.get("/search?term=" + searchTerms + "&limit=25");
  }
}

export default new ITunesElementService();
