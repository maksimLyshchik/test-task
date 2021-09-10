import { SET_INPUT_STATE } from './actionsValidator';

const setInputState = (state, input) => {
  return {
    ...state,
    [input.id]: input,
  };
};

export const inputsValidator = (state = {}, action) => {
  switch (action.type) {
    case SET_INPUT_STATE:
      return setInputState(state, action.payload);
    default:
      return state;
  }
};
