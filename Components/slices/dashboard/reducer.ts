import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  chartData: [],
  error: {},
  gameState: "stop",
  players: [] as Array<any>,
  gameMode: [] as Array<string>,
  roundModeModal: "hide",
  roomCode: String,
  roundName: String,
  email: String,
  role: String,
  imageMode: Boolean,
  helperTips: Boolean,
  playersLimit: Number,
  halfPoints: Boolean,
  round: [],
  images: [],
  scoringInterval: Number,
  questionsPerRound: Number,
  markedAnswers: Number,
  totalAnswers: Number,
  showAnswers: Boolean,
  showScores: Boolean,
  showCorrectAnswers: Boolean,
  requirePlayerEmail: Boolean,
  showQuestions: Boolean,
  displayCorrectAnswer: Boolean,
  adjustByResponse: Boolean,
  adjustByQuestion: Boolean,
  pauseModeContent: String,
  gamePauseMessage: String,
  twitchIntegration: Boolean,
  apiIntegration: Boolean,
  scoreTableKey: String,
  apiSecret: String,
  maxPointValue: Number,
  customTitle: String,
  customUrl: String,
  customUrlTitle: String,
  roundCompleteMessage: String,
  zoomUrl: String,
  twitchUrl: String,
  wagerMode: Boolean,
  sponsoredByAdmin: Boolean,
};

const dashboardslice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    setGameState(state, action) {
      state.gameState = action.payload;
    },
    toggleModal(state, action) {
      state.roundModeModal = action.payload;
      console.log("show");
    },
    setPlayers(state, action) {
      state.players = [];
      action.payload.forEach((player: any) => state.players.push(player));
    },
    setGamedMode(state, action) {
      state.gameMode = [];
      action.payload.forEach((gameMode: any) => state.gameMode.push(gameMode));
    },
  },
});

export const { setGameState, setPlayers, setGamedMode, toggleModal } =
  dashboardslice.actions;

export default dashboardslice.reducer;
