import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'Rating',
    sortProperty: 'rating',
  }
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
    },
  }
})


export const selectFilter = (state) => state.filter;

export const selectSort = (state) => state.filter.sort;

export const {setSearchValue, setCategoryId, setSort, setCurrentPage, setFilters} = filterSlice.actions;

export default filterSlice.reducer;