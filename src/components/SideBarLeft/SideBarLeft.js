import React from 'react';
import { TasksFilter } from './TasksFilter/TasksFilter';
import s from './SideBarLeft.module.css';

export const SideBarLeft = () => {

  return (
    <div className={s.sideBar} >
      <TasksFilter />
    </div>
  );
};
