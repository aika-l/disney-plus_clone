import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';  // step 2

export const store = configureStore({
  reducer: {
    movie: movieReducer
  },
});
