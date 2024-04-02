import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setNotLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setNotLoading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;