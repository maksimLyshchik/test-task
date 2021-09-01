import { createSelector } from 'reselect';

export const selectTasks = store => Object.values(store.tasks);

export const selectObjectTasks = store => store.tasks;

export const selectTasksCount = createSelector(
  selectTasks,
  tasks => tasks.length,
);
