import store from '../index';
import { throttle } from '../../helpers/throttle';
import { period } from '../../common/constants/constantsValues/constantsValues';

export const setLocalStore = () => localStorage.setItem('store', JSON.stringify(store.getState()));

export const addDataToLocalStoreMiddleware = () => next => action => {
  const result = next(action);
  const throttleLocalStore = throttle(setLocalStore, period);

  throttleLocalStore();

  return result;
};
