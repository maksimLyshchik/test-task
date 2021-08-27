import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { addTask } from './store/tasks/actionsTasks';
import { IN_PROGRESS } from './common/constants/constantsTasks/constantsTasks';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

window.onload = () => {
  store.dispatch(addTask({
    id: 0,
    value: 'макс учит веб апи браузера',
    status: IN_PROGRESS
  }))
}