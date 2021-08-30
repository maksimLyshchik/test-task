import { throttle } from '../../helpers/throttle';

export const addDataToLocalStoreMiddleware = store => next => action => {

  let setLocalStore = () => localStorage.setItem('store', JSON.stringify(store.getState()));

  throttle(setLocalStore, 5000);

  return next(action);
};
