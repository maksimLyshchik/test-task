import { configureStore } from '@reduxjs/toolkit';
import { taskReducer } from './reducer';

export default configureStore({
  reducer: {
    tasks: taskReducer,
  }
});
