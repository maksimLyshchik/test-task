import { SET_FILTER_TASKS } from './actionsFilter';
import { TODO } from '../../common/constants/constantsTasks/constantsTasks';

export const filterTasks = (state = {condition: TODO}, action) => {
  switch (action.type) {
    case SET_FILTER_TASKS:
      return {...state, ...action.filter};
    default:
      return state;
  }
};
