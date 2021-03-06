import React from 'react';
import { AddTask } from './components/AddTask/AddTask';
import { TasksList } from './components/TasksList/TasksList';
import { SideBarLeft } from './components/SideBarLeft/SideBarLeft';
import { EditorTasks } from './components/EditorTasks/EditorTasks';
import s from './App.module.css';

export const App = () => {

  return (
    <div className={s.app_main}>
      <SideBarLeft />
      <div className={s.app_main__container}>
        <AddTask />
        <TasksList />
      </div>
      <EditorTasks />
    </div>
  );
};
