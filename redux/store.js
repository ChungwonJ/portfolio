import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from '@/redux/slice/isLoadingSlice';

export const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
  },
});