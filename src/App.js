import React from 'react';
import { AddTask } from './components/AddTask/AddTask';
import { TasksList } from './components/TasksList/TasksList';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.app_section}>
      <div className={s.app_section__container}>
        <AddTask/>
        <TasksList/>
      </div>
    </div>
  );
};
