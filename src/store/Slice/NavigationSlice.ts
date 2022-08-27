import { createSlice } from "@reduxjs/toolkit";

export interface NavigationState {
  value: number;
  headerTitle: string;
  prevValue: number;
  profileTab: number;
}

const initialState: NavigationState = {
  value: 1,
  headerTitle: "PetTech",
  prevValue: 1,
  profileTab: 0,
};

export const NavigationSlice = createSlice({
  name: "Navigation",
  initialState,
  reducers: {
    setState: (state, { payload }) => {
      Object.assign(state, payload);
    },
  },
});

export const { setState } = NavigationSlice.actions;

export const selectData = (state: { Navigation: NavigationState }) =>
  state.Navigation;

export default NavigationSlice.reducer;
