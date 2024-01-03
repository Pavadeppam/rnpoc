import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../api';
import { headers } from '../api/constants';

type userDataT = { username: string; password: string };

type authDataT = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};

type initialStateT = {
  isLoading: boolean;
  authData: any;
  error: string;
};

const initialState: initialStateT = {
  isLoading: true,
  authData: {},
  error: '',
};

export const userLogin = createAsyncThunk(
  'auth/login',
  async (user: userDataT, thunkAPI) => {
    try {
      const response = await API.post('/auth/login', user, { headers });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.authData = {};
      state.error = '';
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authData = action.payload;
      state.error = '';
    });
  },
});

export default authSlice.reducer;
