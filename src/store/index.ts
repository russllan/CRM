import { configureStore } from '@reduxjs/toolkit';
import authSlice from "./slices/authSlice";
import carsSlice from './slices/carsSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cars: carsSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
