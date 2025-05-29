import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    Add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    Sub: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice;
