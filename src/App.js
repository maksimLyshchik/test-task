import React from 'react';
import { AddTask } from './components/AddTask/AddTask';
import { TasksList } from './components/TasksList/TasksList';
import { SideBarLeft } from './components/SideBarLeft/SideBarLeft';
import { EditorTasks } from './components/EditorTasks/EditorTasks';
import { MainContainer, WrapperApp } from './StyledApp';

export const App = () => {
  return (
    <WrapperApp>
      <SideBarLeft />
      <MainContainer>
        <AddTask />
        <TasksList />
      </MainContainer>
      <EditorTasks />
    </WrapperApp>
  );
};
