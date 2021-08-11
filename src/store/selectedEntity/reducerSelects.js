import { SET_SELECT_TASK } from './actionsSelects';

export const selectedTasks = (state = [], action) => {
  switch (action.type) {
    case SET_SELECT_TASK:
      return {...state, ...action.selects};
    default:
      return state;
  }
};
