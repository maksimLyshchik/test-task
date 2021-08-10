import { createSelector } from 'reselect';

const selectTasks = store => Object.values(store.tasks);

export const getTasks = createSelector(
  selectTasks,
  tasks => tasks,
);
