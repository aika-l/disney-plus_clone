import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';  // step 2
import userSlice from '../features/user/userSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice
  },
});
