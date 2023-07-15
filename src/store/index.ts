import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    root: authSlice,
  },
});

export default store;

export type AuthState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
