import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SliceDataType } from "../types";
import { CarsType } from "../../types/index.dto";
import Api from "../../api/Api";

 export const getCars = createAsyncThunk('cars',async () => {
    const response = await Api.cars.getAll();
    return response;
 });

interface StateType {
    cars: SliceDataType<CarsType[]>;
}

const initialState: StateType = {
    cars: {
        result: []
    }
}

 const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCars.fulfilled, (state, action) => {
            state.cars.result = action.payload;
        });
    }
 })

 export const cars = carsSlice.actions;
 
 export default carsSlice.reducer;