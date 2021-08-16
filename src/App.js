import React from 'react';
import { AddTask } from './components/AddTask/AddTask';
import { TasksList } from './components/TasksList/TasksList';
import { SideBarLeft } from './components/SideBarLeft/SideBarLeft';
import { SideBarRight } from './components/SideBarRight/SideBarRight';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.app_section} >
      <SideBarLeft />
      <div className={s.app_section__container} >
        <AddTask />
        <TasksList />
      </div>
      <SideBarRight />
    </div>
  );
};
