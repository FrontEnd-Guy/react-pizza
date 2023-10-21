import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params) => {
    const {category, sortBy, order, search, currentPage} = params
    const { data } = await axios.get(
      `https://651230b9b8c6ce52b39562a3.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`,
    );
    return data}
)

export const initialState = {
  items: [],
  status: 'loading'
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  },
  extraReducers: {
    [fetchPizzas.pending] : (state, action) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizzas.fulfilled] : (state, action) => {
      state.status = 'success'
      state.items = action.payload
    },
    [fetchPizzas.rejected] : (state, action) => {
      state.status = 'error'
      state.items = []
    }
  }
})

export const selectPizzaData = (state) => state.pizza;

export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;