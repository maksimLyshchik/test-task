import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './tasks/reducerTasks';
import { selectedTasks } from './selectedEntity/reducerSelects';
import { filterTasks } from './filter/reducerFilter';
import { componentsSettings } from './componentsSettings/reducerSettings';
import { addDataToLocalStoreMiddleware } from './middleware/addDataToLocalStoreMiddleware';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    tasks: tasks,
    selects: selectedTasks,
    filter: filterTasks,
    sidebar: componentsSettings,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(addDataToLocalStoreMiddleware, thunk),
});
