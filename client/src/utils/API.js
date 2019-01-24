import axios from "axios";
import googleBooks from "./keys";
require("dotenv").config();

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = googleBooks.key;

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  save: function(thisBook) {
    return axios.post("/API", thisBook);
  },
  load: function()  {
    return axios.get("/API/books");
  },
  remove: function(id)  {
    return axios.delete("/API/books/" + id);
  }
};
