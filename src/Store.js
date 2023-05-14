import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Redux';

const store = configureStore({
  reducer: {
    comments: counterReducer,
  },
});

export default store;