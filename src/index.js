import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { addTask } from './store/tasks/actionsTasks';
import { setSelectTask } from './store/selectedEntity/actionsSelects';
import { setLocalStore } from './store/middleware/addDataToLocalStoreMiddleware';

export const initialState = JSON.parse(localStorage.getItem('store'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

window.onload = () => {
  if (!!Object.keys(initialState).length) {
    Object.values(initialState.tasks).forEach(task => {
      store.dispatch(addTask({ ...task }));

      store.dispatch(setSelectTask({
        [task.id]: false,
      }));
    });
  }
};

window.onunload = () => {
  setLocalStore();
};
