import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Api from "../../api/Api";
import { AuthType, RefreshToken } from "../../types/index.dto";
import { SliceDataType } from "../types";

export const postAuth = createAsyncThunk("auth", async (userData: AuthType) => {
  const response = await Api.auth.postAuth(userData);
  return response;
});

export const refreshAuth = createAsyncThunk("refresh", async (data: RefreshToken) => {
  const response = await Api.auth.refreshToken(data);
  return response;
});

interface RootState {
  isAuth: boolean;
  user: SliceDataType<AuthType[]>;
  error: boolean;
  role: string;
  token: string;
  isLoading: boolean;
}

const role = localStorage.getItem("role");
const initialState: RootState = {
  isAuth: false,
  user: {
    result: [],
  },
  role: "driver",
  token: "",
  error: false,
  isLoading: false
};

const authSlice = createSlice({
  name: "root",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
      state.error = false;
      state.user.result = action.payload;
      localStorage.setItem("token", JSON.stringify(state.user.result));
    });
    builder.addCase(postAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postAuth.rejected, (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = true;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
