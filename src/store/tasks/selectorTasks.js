import { createSelector } from 'reselect';

export const selectObjectTasks = store => store.tasks;

export const selectTasks = createSelector(
  selectObjectTasks,
  tasks => Object.values(tasks),
);

export const selectTasksId = createSelector(
  selectObjectTasks,
  tasks => Object.keys(tasks),
);
