import axios from "axios";
import { checkAuth } from "../util/localStorage";
import { baseURL } from "../util/constants";

const api = axios.create({ baseURL });

export const playerAPI = {
  getRoom(room) {
    return api.get("player/room/" + room).then((res) => {
      return res.data;
    });
  },
  playerLogin(room, name) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .post(
        "player/login",
        {
          room: room,
          name: name,
        },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return { data: res.data, status: res.status };
      });
  },
  getGame() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("player/game", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getQuestion(questionNum) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("player/answer/" + questionNum, {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getAnswers() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("player/answers", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  submitAnswer(answer, questionNum, bet) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api.post(
      "player/answer/" + questionNum,
      { answer, bet },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
  },
  getQuestions() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("player/questions", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getImage(questionNum) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("player/image/" + questionNum, {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getCurrentRound() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("player/current-round", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
};
