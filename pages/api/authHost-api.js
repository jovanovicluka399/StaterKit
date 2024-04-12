import axios from "axios";
import { checkAuth } from "../util/localStorage";
import { baseURL } from "../util/constants";

const api = axios.create({ baseURL });

export const authHostAPI = {
  async verifyToken(token) {
    const url = "auth/verify-token/" + token;
    const res = await api.get(url);
    return res.data;
  },
  async signUp(email, password, source, locationData) {
    const res = await api.post("auth/signup", {
      email: email,
      password: password,
      source,
      locationData: locationData,
    });
    return res.data;
  },
  async signUpVenue(venueName, fullName, email, locationData) {
    const res = await api.post("venue/signup", {
      venueName: venueName,
      fullName: fullName,
      email: email,
      locationData: locationData,
    });
    return res.data;
  },
  async login(login, password) {
    const res = await api.post("auth/login", {
      login: login,
      password: password,
    });
    return res.data;
  },
  async updatePass(pass, newPass, confirmPass) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "auth/update-pass",
      {
        password: pass,
        newPassword: newPass,
        confirmPassword: confirmPass,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async resetPass(email) {
    const res = await api.post("auth/reset-pass", {
      email: email,
    });
    return res.data;
  },
  async newPass(resToken, newPass, confirmPass) {
    const res = await api.post("auth/new-pass", {
      resToken: resToken,
      newPassword: newPass,
      confirmPassword: confirmPass,
    });
    return res.data;
  },
  async addImage(orderNum, url) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "auth/image",
      {
        orderNum: orderNum,
        url: url,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async uploadImage(file) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const fd = new FormData();
    fd.append("image", file);

    const res = await api.post("auth/upload-image", fd, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: auth,
      },
    });
    return res.data;
  },
  async getImages() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.get("auth/images", {
      headers: {
        Authorization: auth,
      },
    });
    return res.data;
  },
  async deleteImage(orderNum) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.delete("auth/image", {
      headers: {
        Authorization: auth,
      },
      data: {
        orderNum: orderNum,
      },
    });
    return res.data;
  },
  async deleteAllImages() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.delete("auth/images", {
      headers: {
        Authorization: auth,
      },
    });
    return res.data;
  },
  async changeImageMode(imageMode) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "/auth/image-mode",
      {
        imageMode,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async updateSettings(
    halfPoints,
    helperTips,
    questionsPerRound,
    showAnswers,
    showScores,
    showCorrectAnswers,
    requirePlayerEmail,
    scoringInterval,
    playersLimit
  ) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "/auth/update-settings",
      {
        halfPoints,
        helperTips,
        questionsPerRound,
        showAnswers,
        showScores,
        showCorrectAnswers,
        requirePlayerEmail,
        scoringInterval,
        playersLimit,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async changeRoomCode(newRoomCode) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "/auth/change-room-code",
      {
        roomCode: newRoomCode,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async updateCustomSettings(
    customTitle,
    customUrl,
    customUrlTitle,
    roundCompleteMessage,
    zoomUrl,
    twitchUrl
  ) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "/auth/update-custom-settings",
      {
        customTitle,
        customUrl,
        customUrlTitle,
        roundCompleteMessage,
        zoomUrl,
        twitchUrl,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async updateProOptions(
    adjustByResponse,
    adjustByQuestion,
    maxPointValue,
    showQuestions,
    showAnswers,
    displayCorrectAnswer,
    pauseModeContent,
    gamePauseMessage
  ) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "/auth/update-pro-options",
      {
        adjustByResponse,
        adjustByQuestion,
        maxPointValue,
        showQuestions,
        showAnswers,
        displayCorrectAnswer,
        pauseModeContent,
        gamePauseMessage,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async adjustScore(answerId, increase) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "/auth/update-score",
      {
        answerId,
        increase,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async updatePlan(subscriptionId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "auth/pro",
      {
        subscriptionId: subscriptionId,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async getSubscription() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.get("/auth/subscription", {
      headers: {
        Authorization: auth,
      },
    });
    return res.data;
  },
  async cancelSubscription(reason) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/cancel",
      {
        reason: reason,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async getRounds() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.get("/auth/rounds", {
      headers: {
        Authorization: auth,
      },
    });
    return res.data;
  },
  async getRound(roundId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.get("/auth/round/" + roundId, {
      headers: {
        Authorization: auth,
      },
    });
    return res.data;
  },
  async createRound(roundName, questionText, answerText, imgUrl) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/create-round",
      {
        roundName,
        questionText,
        answerText,
        imgUrl,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async createQuestion(roundId, questionText, answerText, imgUrl) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/add-question",
      {
        roundId,
        questionText,
        answerText,
        imgUrl,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async editRoundName(roundId, roundName) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/edit-name",
      { roundId, roundName },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async editQuestion(roundId, questionText, answerText, orderNum, imgUrl) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/edit-question",
      { roundId, questionText, answerText, orderNum, imgUrl },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async removeQuestion(roundId, orderNum) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.delete("/auth/question", {
      headers: {
        Authorization: auth,
      },
      data: {
        roundId,
        orderNum,
      },
    });
    return res.data;
  },
  async removeRound(roundId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.delete("/auth/round", {
      headers: {
        Authorization: auth,
      },
      data: {
        roundId,
      },
    });
    return res.data;
  },
  async selectRound(roundMode, roundId, schemeId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/select-round",
      { roundMode, roundId, schemeId },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async getCurrentRound() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.get("/auth/current-round", {
      headers: {
        Authorization: auth,
      },
    });
    return res.data;
  },
  async automaticMode(amount, category, source) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/automatic-round",
      { amount, category, source },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async getScoreTable(key) {
    const res = await api.get("/auth/score-table/" + key);
    return res.data;
  },
  async generateApiSecret() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/api-secret",
      {},
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async generateScoreTableKey() {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/score-table-key",
      {},
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async updateTwitchIntegration(twitchIntegration) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/twitch-integration",
      {
        twitchIntegration,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async updateApiSettings(apiIntegration) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.post(
      "/auth/api",
      {
        apiIntegration,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
  async updatePreEnteredRound(roundId, schemeId) {
    const token = checkAuth();
    const auth = "Bearer " + token;
    const res = await api.put(
      "auth/update-preentered-round",
      {
        roundId,
        schemeId,
      },
      {
        headers: {
          Authorization: auth,
        },
      }
    );
    return res.data;
  },
};
