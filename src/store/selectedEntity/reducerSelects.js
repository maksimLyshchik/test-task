import { DELETE_SELECT_TASK, SET_SELECT_TASK } from './actionsSelects';

const deleteSelectedTask = (state, id) => {
  const newState = Object.assign({}, state);
  delete newState[id];
  state = newState;
  return {...state};
};

export const selectedTasks = (state = {}, action) => {
  switch (action.type) {
    case SET_SELECT_TASK:
      return {...state, ...action.selects};
    case DELETE_SELECT_TASK:
      return deleteSelectedTask(state, action.id);
    default:
      return state;
  }
};
