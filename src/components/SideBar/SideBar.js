import React from 'react';
import { TasksFilter } from './TasksFilter/TasksFilter';
import s from './SideBar.module.css';

export const SideBar = () => {

  return (
    <div className={s.sideBar} >
      <TasksFilter />
    </div>
  );
};
