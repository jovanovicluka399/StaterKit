// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import axios from "axios";
//import { checkAuth } from "../util/localStorage";
import { baseURL } from "../util/constants";

type Data = {
  name: string
}

const api = axios.create({ baseURL });

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

export const userHostApi = {
  async signUp(email: string, password: string, room: string) {
    const res = await api
            .post("user/sign-up", {
                email,
                password,
                room,
            });
        return res.data;
  },
  async login(email: string, password: string) {
    const res = await api
          .post("user/login", {
              email,
              password,
          });
      return res.data;
  },
  async forgotPassword(email: string) {
    const res = await api
          .post("user/reset-password", {
              email: email,
          });
      return res.data;
  },
  async resetPassword(resToken: string, newPass: string, /*confirmPass: string*/) {
    const res = await api
          .post("user/set-password", {
              resetToken: resToken,
              password: newPass,
          });
      return res.data;
  },
  async resendVerification(email: string, room: string) {
    const res = await api
          .post("user/resend-email", {
              email,
              room,
          });
      return res.data;
  },
  async verifyAccount(verificationToken: string) {
    const res = await api.get(`user/verify/${verificationToken}`);
      return res.data;
  },
};
