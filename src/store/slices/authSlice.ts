import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  value: number;
  isAuth: boolean,
  data: null | {
    email?: string;
    role: string;
    token?: string; 
  };
  error: null;
};

const role = localStorage.getItem("role");
const initialState: RootState = {
  value: 0,
  isAuth: true,
  data: {
    email: "driver@gmail.com",
    role: role || 'driver',
    token: ""
  },
  error: null
};

const authSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setRole: (state: RootState, action: PayloadAction<string>) => {
      state.data = { ...state.data, role: action.payload };
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;