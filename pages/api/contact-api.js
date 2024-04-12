import axios from "axios";
import { baseURL } from "../util/constants";

const api = axios.create({ baseURL });

 export const contactApi = {
  async sendFeedback(email, message) {
    const res= await api
      .post("contact/", {
        email,
        message,
      });
        return res.data;     
  }
}

