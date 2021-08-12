import { ADD_TASK, SET_SELECT_TASK } from './actions';

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const selectTaskReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SELECT_TASK:
      return {...state, ...action.selects};
    default:
      return state;
  }
};
