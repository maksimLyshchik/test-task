import { createSelector } from 'reselect';

const selectCheckedTask = store => store.selects;

export const getCheckedTasks = createSelector(
  selectCheckedTask,
  selects => selects,
);