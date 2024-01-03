import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type userT = {
  email: string;
  name: string;
  location: string;
  role: string | number | undefined;
};

const initialState: userT = {
  email: '',
  name: '',
  location: '',
  role: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<userT>) => {
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        location: action.payload.location,
        role: action.payload.role,
      };
    },
  },
});

export default userSlice.reducer;

export const { updateUser } = userSlice.actions;
