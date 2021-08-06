import { configureStore } from '@reduxjs/toolkit';
import { selectTaskReducer, taskReducer } from './reducer';

export default configureStore({
  reducer: {
    tasks: taskReducer,
    selects: selectTaskReducer,
  }
});
