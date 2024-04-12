import axios from "axios";

const api = axios.create({ baseURL: "https://opentdb.com/" });

export const openTdbAPI = {
  getCategories() {
    return api.get("api_category.php").then((res) => {
      return res.data;
    });
  },
  QuestionsCount(id) {
    return api.get("api_count.php?category=" + id).then((res) => {
      return res.data;
    });
  },
};
