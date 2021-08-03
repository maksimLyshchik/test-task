import React from 'react';
import s from './TaskList.module.css'
import CheckboxHolder from "./CheckboxHolder/CheckboxHolder";
import BlockTasks from "./BlockTasks/BlockTasks";

function TaskList() {
    return (
        <div className={s.TaskList}>
            <CheckboxHolder />
            <BlockTasks />
        </div>
    )
}

export default TaskList;