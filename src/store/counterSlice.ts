import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type counterT = {
  countValue: number;
};

const initialState: counterT = {
  countValue: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.countValue += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.countValue -= action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
