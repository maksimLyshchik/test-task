import React from 'react';
import { AddTask } from './components/AddTask/AddTask';
import { TasksList } from './components/TasksList/TasksList';
import { SideBarLeft } from './components/SideBarLeft/SideBarLeft';
import { EditorTasks } from './components/EditorTasks/EditorTasks';
import { StyledMainContainer, StyledWrapperApp } from './StyledApp';
import s from './App.module.css';

export const App = () => {
  return (
    <StyledWrapperApp>
      <SideBarLeft />
      <StyledMainContainer>
        <AddTask />
        <TasksList />
      </StyledMainContainer>
      <EditorTasks />
    </StyledWrapperApp>
  );
};
