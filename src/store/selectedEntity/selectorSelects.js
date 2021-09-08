import { createSelector } from 'reselect';
import { selectObjectTasks, selectTasks } from '../tasks/selectorTasks';

export const selectCheckedTask = store => store.selects;

export const selectMarkedTask = store => Object.entries(store.selects).filter(item => item[1]).map(item => Number(item[0]));

export const selectMarkedTaskLength = createSelector(
  selectMarkedTask,
  selectObjectTasks,
  (markTasksId, tasks) => markTasksId.filter(id => tasks[id].subtasks).length !== markTasksId.length,
);
