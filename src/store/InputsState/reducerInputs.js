import { SET_INPUT_STATE } from './actionsInputs';

export const inputsState = (state = {}, action) => {
  switch (action.type) {
    case SET_INPUT_STATE:
      return {    ...state,
        [action.payload.id]: action.payload,};
    default:
      return state;
  }
};
