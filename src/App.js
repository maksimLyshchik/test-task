import React from 'react';
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.app_section}>
      <div className={s.app_section__container}>
        <AddTask/>
        <TaskList/>
      </div>
    </div>
  );
};
