import React from 'react';
import s from './TaskList.module.css';
import { BlockTask } from './BlockTasks/BlockTask';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../store/selector';

export const TaskList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className={s.TaskList}>
      {tasks.map(item => <BlockTask {...item} />)}
    </div>
  );
};