import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './tasks/reducerTasks';
import { selectedTasks } from './selectedEntity/reducerSelects';

export default configureStore({
  reducer: {
    tasks: tasks,
    selects: selectedTasks,
  }
});
