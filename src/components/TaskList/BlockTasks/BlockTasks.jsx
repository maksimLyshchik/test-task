import React from 'react';
import s from './BlockTasks.module.css';
import { useSelector } from 'react-redux';
import { selectTasks } from '../../../store/selector';

function BlockTasks() {
  const tasks = useSelector(selectTasks());

  return (
    <>
      {tasks.map((task, id) => (
        <div className={s.blockTask} key={id}>
          <input type="checkbox"/>
          <p>{task}</p>
          <input type="checkbox"/>
          <input type="checkbox"/>
        </div>
      ))
      }
    </>
  );
}

export default BlockTasks;