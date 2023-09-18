import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from "axios";

// Define a TypeScript type for the initial state
export interface FormState {
  name: string;
  login: string;
  email: string;
  phone: string;
  selectedCar: string;
  carOptions: string[];
  drivers: string[];
  form: string,
  surName: string,
  lastName: string,
  password: string
}

// Define the initial state
export const initialState: FormState = {
  name: '',
  login: '',
  email: '',
  phone: '',
  selectedCar: '',
  carOptions: ['Car A', 'Car B', 'Car C'],
  drivers: [],
  form: '',
  surName: '',
  lastName: '',
  password: ''

};

// Create a Redux Toolkit slice
export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setSurName: (state, action: PayloadAction<string>) => {
      state.surName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setSelectedCar: (state, action: PayloadAction<string>) => {
      state.selectedCar = action.payload;
    },
    clearForm: (state) => {
      state.name = '';
      state.login = '';
      state.email = '';
      state.phone = '';
    },
    addDriver: (state, action: PayloadAction<string>) => {
      state.drivers.push(action.payload);
    },
  },
});

export const {
  setName,
  setLogin,
  clearForm,
  setEmail,
  setPhone,
  addDriver,
  setSelectedCar,
  setLastName,
  setSurName,
  setPassword
} = formSlice.actions;

export default formSlice.reducer;


export const addDriverFetch = async (formData: FormState) => {
  try {
    const response = await axios.post('https://644ab451a8370fb321560b1c.mockapi.io/drivers', formData);

    if (response.status === 200) {
      console.log('Данные успешно отправлены на сервер:', response.data);
    }
  } catch (error) {
    console.error('Ошибка при отправке данных на сервер:', error);
  }
};