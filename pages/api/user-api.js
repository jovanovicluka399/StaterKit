import axios from "axios";
import { checkAuth } from "../util/localStorage";
import { baseURL } from "../util/constants";

const api = axios.create({ baseURL });

export const userHostApi = {
  signUp(email, password, room) {
    return api
      .post("user/sign-up", {
        email,
        password,
        room,
      })
      .then((res) => {
        return res.data;
      });
  },
  login(email, password) {
    return api
      .post("user/login", {
        email,
        password,
      })
      .then((res) => {
        return res.data;
      });
  },
  forgotPassword(email) {
    return api
      .post("user/reset-password", {
        email: email,
      })
      .then((res) => {
        return res.data;
      });
  },
  resetPassword(resToken, newPass, confirmPass) {
    return api
      .post("user/set-password", {
        resetToken: resToken,
        password: newPass,
      })
      .then((res) => {
        return res.data;
      });
  },
  resendVerification(email, room) {
    return api
      .post("user/resend-email", {
        email,
        room,
      })
      .then((res) => {
        return res.data;
      });
  },
  verifyAccount(verificationToken) {
    return api.get(`user/verify/${verificationToken}`).then((res) => res.data);
  },
};
