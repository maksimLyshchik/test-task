import { SET_FILTER_TASKS, SET_SORTER_TASKS } from './actionsFilter';
import { ALL } from '../../common/constants/constantsTasks/constantsTasks';
import { ASCENDING } from '../../common/constants/constantsSort/constantsSort';

export const filterTasks = (state = {condition: ALL, sorting: ASCENDING}, action) => {
  switch (action.type) {
    case SET_FILTER_TASKS:
      return {...state, ...action.filter};
    case SET_SORTER_TASKS:
      return {...state, ...action.sorter};
    default:
      return state;
  }
};
