import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  userName: string;
  profile: string;
  userType: string;
}

const initialState: AuthState = {
  userName: "",
  profile: "",
  userType: "",
};

export const AuthSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      Object.assign(state, payload);
    },
  },
});

export const { setState } = AuthSlice.actions;

export const selectData = (state: { Auth: AuthState }) => state.Auth;

export default AuthSlice.reducer;
