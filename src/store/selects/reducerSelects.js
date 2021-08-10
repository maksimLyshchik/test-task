import { SET_SELECT_TASK } from './actionsSelects';

export const selectTaskReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SELECT_TASK:
      return {...state, ...action.selects};
    default:
      return state;
  }
};
