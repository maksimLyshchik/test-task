import { createSelector } from 'reselect';
import { selectTasks } from '../tasks/selectorTasks';

const selectFilter = store => store.filter;

export const selectFiltredTasks = createSelector(
  selectTasks,
  selectFilter,
  (tasks, filter) => tasks.filter(item => item.status === filter.condition && item)
);
