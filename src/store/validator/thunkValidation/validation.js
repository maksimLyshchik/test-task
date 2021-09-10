import { setInputState } from '../actionsValidator';

export const validation = (id, value) => (dispatch) => {

  dispatch(setInputState({ id, value, valid: !!value, error: !value}));
};
