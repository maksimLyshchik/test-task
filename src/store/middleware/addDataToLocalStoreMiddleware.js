export const addDataToLocalStoreMiddleware = store => next => action => {
  const isStartInterval = !Object.values(store.getState().tasks).length;

  const setLocalStore = () => localStorage.setItem('store', JSON.stringify(store.getState()));

  if (isStartInterval) {
    setInterval(setLocalStore, 10000)
  }

  return next(action);
};
