import axios from "axios";

const api = axios.create({ baseURL: "https://api.HiroRat.com/get" });

export const HiroRatDBAPI = {
  getCategories() {
    return api.get("/cats").then((res) => {
      return res.data;
    });
  },
  getCategory(id) {
    return api.get("?category=" + id).then((res) => {
      return res.data;
    });
  },
};
