import store from '../index';
import { throttle } from '../../helpers/throttle';
export const setLocalStore = () => localStorage.setItem('store', JSON.stringify(store.getState()));

export const addDataToLocalStoreMiddleware = () => next => action => {
  const result = next(action);
  const throttleLocalStore = throttle(setLocalStore, 60000);

  throttleLocalStore();

  return result;
};
