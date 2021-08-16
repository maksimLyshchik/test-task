import React from 'react';
import { EditorTasks } from './EditorTasks/EditorTasks';
import s from './SideBarRight.module.css';

export const SideBarRight = () => {

  return (
    <div className={s.sideBarRight} >
      <EditorTasks />
    </div>
  );
};
