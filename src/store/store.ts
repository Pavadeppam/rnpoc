import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import authReducer from './authSlice';
import productReducer from './productSlice';
import proileSelectedReducer from './profileSelectedSlice';
import caretStateReducer from './caretSateSlice';
import userReducer from './userSlice';
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productReducer,
    profile: proileSelectedReducer,
    user: userReducer,
    caret: caretStateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
