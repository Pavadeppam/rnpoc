import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type insintialStateT = {
  isExpanded: boolean;
};

const initialState: insintialStateT = {
  isExpanded: false,
};
const caretStateSlice = createSlice({
  name: 'caret',
  initialState,
  reducers: {
    setIsExpanded: (state, action: PayloadAction<boolean>) => {
      state.isExpanded = action.payload;
    },
  },
});

export default caretStateSlice.reducer;

export const { setIsExpanded } = caretStateSlice.actions;
