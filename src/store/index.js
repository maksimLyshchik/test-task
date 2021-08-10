import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/reducerTasks';
import { selectTaskReducer } from './selects/reducerSelects';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    selects: selectTaskReducer,
  }
});
