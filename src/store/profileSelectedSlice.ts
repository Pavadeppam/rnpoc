import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type insintialStateT = {
  isProfileSelected: boolean;
};

const initialState: insintialStateT = {
  isProfileSelected: false,
};
const proileSelectedSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsProfleSelected: (state, action: PayloadAction<boolean>) => {
      state.isProfileSelected = action.payload;
    },
  },
});

export default proileSelectedSlice.reducer;

export const { setIsProfleSelected } = proileSelectedSlice.actions;
