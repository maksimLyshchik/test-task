import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectTask } from '../../../store/selectedEntity/actionsSelects';
import { Checkbox } from '../../../common/modules/Checkbox/Checkbox';
import { COMPLETED, REJECTED } from '../../../common/constants/constantsTasks/constantsTasks';
import { getDateNow } from '../../../helpers/getDateNow';
import { TaskActions } from './TaskActions/TaskActions';
import { selectCheckedTask } from '../../../store/selectedEntity/selectorSelects';
import { TaskContent } from './TaskContent/TaskContent';
import s from './Task.module.css';

const taskClass = {
  primary: s.task,
  completed: s.completed,
  rejected: s.rejected,
  in_progress: s.inProgress,
  todo: '',
};

export const Task = ({task}) => {
  const dispatch = useDispatch();
  const isMultiplayTask = task?.subtasks;
  const {value, id, status, time, timeChange} = task;
  const selectedTasks = useSelector(selectCheckedTask);
  const isRejectedTask = status === REJECTED;
  const isSuccessTask = status === COMPLETED;
  const isVisibledTimeChange = time !== timeChange;

  const handleChangeSelect = useCallback(({target}) => {
    const {checked} = target;
    dispatch(setSelectTask({[id]: checked}));
  }, [dispatch, id]);

  return (
    <div className={`${s.task} ${taskClass[status]}`} >
      <div className={s.blockTask__main} >
        <Checkbox onChange={handleChangeSelect} checked={selectedTasks[id]} disabled={isRejectedTask || isSuccessTask} />
        <TaskContent task={task} value={value} isMultiplayTask={isMultiplayTask} />
        <TaskActions id={id} status={status} />
      </div>
      <div className={s.blockTask__block_time} >
        <div>Time created task: {getDateNow(time)} </div>
        {isVisibledTimeChange && <div>Time {status} task: {getDateNow(timeChange)} </div>}
      </div>
    </div>
  );
};
