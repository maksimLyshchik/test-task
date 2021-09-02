import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { addTask } from './store/tasks/actionsTasks';
import { setSelectTask } from './store/selectedEntity/actionsSelects';

export const initialState = JSON.parse(localStorage.getItem('store'));
export const setLocalStore = () => localStorage.setItem('store', JSON.stringify(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

window.onload = () => {
  Object.values(initialState.tasks).forEach(task => {
    store.dispatch(addTask({
      id: task.id,
      value: task.value,
      timeCreation: task.timeCreation,
      status: task.status,
      timeChange: task.timeChange,
      subtasks: task.subtasks,
    }));

    store.dispatch(setSelectTask({
      [task.id]: false
    }));
  });
};

window.onunload = () => {
  setLocalStore();
};
