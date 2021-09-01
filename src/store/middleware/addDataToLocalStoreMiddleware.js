import { throttle } from '../../helpers/throttle';
import { setLocalStore } from '../../index';

export const addDataToLocalStoreMiddleware = () => next => action => {
  const result = next(action);
  const throttleLocalStore = throttle(setLocalStore, 60000);

  throttleLocalStore();

  return result;
};
