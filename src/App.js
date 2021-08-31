import React, { useEffect } from 'react';
import { AddTask } from './components/AddTask/AddTask';
import { TasksList } from './components/TasksList/TasksList';
import { SideBarLeft } from './components/SideBarLeft/SideBarLeft';
import { EditorTasks } from './components/EditorTasks/EditorTasks';
import store from './store';
import { addTask } from './store/tasks/actionsTasks';
import { setSelectTask } from './store/selectedEntity/actionsSelects';
import s from './App.module.css';

export const App = () => {
  const initialState = JSON.parse(localStorage.getItem('store'));

  useEffect(() => {
    Object.values(initialState.tasks).map(task => {

      store.dispatch(addTask({
        id: task.id,
        value: task.value,
        timeCreation: task.timeCreation,
        status: task.status,
        timeChange: task.timeChange,
      }));

      store.dispatch(setSelectTask({
        [task.id]: false
      }));
    });
  }, [])

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
