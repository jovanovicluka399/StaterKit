import axios from "axios";
import { checkAuth, cleanLocalStorage } from "../util/localStorage";
import { baseURL } from "../util/constants";

const api = axios.create({ baseURL });

export const hostAPI = {
  guestLogin() {
    return api.post("host/login/guest").then((res) => {
      return res.data;
    });
  },
  getGame() {
    const token = checkAuth();
    if (!token) {
      cleanLocalStorage();
    }
    const auth = "Bearer " + token;
    return api
      .get("host/game", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getPlayers() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("host/players", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getQuestions() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("host/questions", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getQuestion(questionId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("host/question/" + questionId, {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  markAnswer(answerId, mark, pointValue) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .post(
        "host/mark-answer",
        {
          answerId,
          mark,
          pointValue,
        },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  deletePlayer(playerId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .delete("host/player/" + playerId, {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  clearScores() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("host/clear-scores", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  newRound(schemeId, wagerMode) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "host/new-round",
        { schemeId, wagerMode },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  deletePlayers() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .delete("host/players", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  adjustScore(playerId, mark, increase) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "host/player/" + playerId,
        { mark: mark, increase: increase },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  setMode(mode) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "host/mode",
        { mode: mode },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  deleteHost() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .delete("host/game/guest", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  endGame() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("host/finish-game", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  getTrophies() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("host/trophies", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  deleteTrophies() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .delete("host/trophies", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  changePlayerName(playerId, newName) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "host/change-player-name",
        { playerId, newName },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  createScheme(
    name,
    type,
    singleUse,
    mandatory,
    subtract,
    points,
    percentage,
    bonusPoints
  ) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .post(
        "host/wager-scheme",
        {
          name,
          type,
          singleUse,
          mandatory,
          points,
          subtract,
          percentage,
          bonusPoints,
        },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  getSchemes() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("/host/wager-schemes", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },

  editScheme(
    schemeId,
    name,
    type,
    singleUse,
    mandatory,
    subtract,
    points,
    percentage,
    bonusPoints
  ) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "/host/wager-scheme",
        {
          schemeId,
          name,
          type,
          singleUse,
          mandatory,
          subtract,
          points,
          percentage,
          bonusPoints,
        },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },

  deleteScheme(schemeId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .delete("/host/wager-scheme", {
        headers: {
          Authorization: auth,
        },
        data: {
          schemeId,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
  changeWagerMode(wagerMode) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "/host/wager-mode",
        {
          wagerMode,
        },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  markIncorrectAnswers(questionId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "/host/mark-incorrect",
        { questionId },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  updateSchemesOrder(schemes) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "/host/schemes-order",
        { schemes },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  changePlayerScore(playerId, newScore) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .put(
        "host/change-player-score",
        { playerId, newScore },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  },
  getRoundSnapshot() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    return api
      .get("host/round-snapshot", {
        headers: {
          Authorization: auth,
        },
      })
      .then((res) => {
        return res.data;
      });
  },
};
