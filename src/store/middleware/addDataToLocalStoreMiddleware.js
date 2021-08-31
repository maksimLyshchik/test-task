import { throttle } from '../../helpers/throttle';

export const addDataToLocalStoreMiddleware = store => next => action => {
  const result = next(action);
  const setLocalStore = () => localStorage.setItem('store', JSON.stringify(store.getState()));
  const throttleLocalStore = throttle(setLocalStore, 10000);

  throttleLocalStore();

  return result;
};
