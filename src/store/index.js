import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './tasks/reducerTasks';
import { selectedTasks } from './selectedEntity/reducerSelects';
import { filterTasks } from './filter/reducerFilter';
import { componentsSettings } from './componentsSettings/reducerSettings';
import { loggerMiddleware } from './tasks/loggerMiddleware';

export default configureStore({
  reducer: {
    tasks: tasks,
    selects: selectedTasks,
    filter: filterTasks,
    sidebar: componentsSettings,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});
