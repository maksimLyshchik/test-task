import React from 'react';
import s from './TaskList.module.css';
import BlockTasks from './BlockTasks/BlockTasks';

function TaskList() {
  return (
    <div className={s.TaskList}>
      <BlockTasks/>
    </div>
  );
}

export default TaskList;