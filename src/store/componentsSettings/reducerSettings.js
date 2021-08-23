import { SET_VISIBLED_SIDEBAR } from './actionSettings';

export const componentsSettings = (state = {isVisibledSidebar: 'collapsed'}, action) => {
  switch (action.type) {
    case SET_VISIBLED_SIDEBAR:
      return {...state, ...action.isVisibled};
    default:
      return state;
  }
};
