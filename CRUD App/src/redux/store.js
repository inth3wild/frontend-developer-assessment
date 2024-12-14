import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './task-slice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
