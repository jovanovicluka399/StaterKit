import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: null,
  error: "",
  loading: false,
  isUserLogout: false
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    apiError(state, action) {
      state.error = action.payload.response?action.payload.response.data.message:action.payload.message;
      state.loading = false;
      state.isUserLogout = false;
    },
    loginSuccess(state, action) {
      state.user = action.payload
      state.loading = false;
    },
    logoutUserSuccess(state, action) {
      state.isUserLogout = true
    },
    reset_login_flag(state) {
      state.error = ""
    }
  },
});

export const {
  apiError,
  loginSuccess,
  logoutUserSuccess,
  reset_login_flag
} = loginSlice.actions

export default loginSlice.reducer;