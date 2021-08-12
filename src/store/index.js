import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './tasks/reducerTasks';
import { selectedTasks } from './selectedEntity/reducerSelects';
import { filterTasks } from './filter/reducerFilter';

export default configureStore({
  reducer: {
    tasks: tasks,
    selects: selectedTasks,
    filter: filterTasks,
  }
});
