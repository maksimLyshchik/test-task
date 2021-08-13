import React, { useCallback } from 'react';
import { Input } from '../../../common/modules/Input/Input';
import { useDispatch } from 'react-redux';
import { setSelectTask } from '../../../store/selectedEntity/actionsSelects';
import { Checkbox } from '../../../common/modules/Checkbox/Checkbox';
import { Button } from '../../../common/modules/Button/Button';
import { Icon } from '../../../common/modules/Icons/Icons';
import { completedTask, rejectedTask, taskChangeTime, todoTask } from '../../../store/tasks/actionsTasks';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../../common/constants/constantsTasks/constantsTasks';
import s from './BlockTasks.module.css';

const blockTaskClass = {
  primary: s.blockTask,
  completed: s.completed,
  rejected: s.rejected,
  in_progress: s.inProgress,
};

export const BlockTask = ({value, id, selected, status}) => {
  const dispatch = useDispatch();

  const handleChangeSelect = useCallback(({target}) => {
    const {checked} = target;
    dispatch(setSelectTask({[id]: checked}));
  }, [dispatch, id]);

  const handleRejectedTask = useCallback(() => {
    dispatch(rejectedTask(id));
  }, [dispatch, id]);

  const handleCompletedTask = useCallback(() => {
    dispatch(completedTask(id));
    dispatch(taskChangeTime(id));
  }, [dispatch, id]);

  const handleTodoTask = useCallback(() => {
    dispatch(todoTask(id));
    dispatch(taskChangeTime(id));
  }, [dispatch, id]);

  const isStatusButtonWarning = status === REJECTED || status === COMPLETED;

  const isStatusButtonSuccess = status === REJECTED || status === COMPLETED;

  const isStatusButtonInfo = status === REJECTED || status === COMPLETED || status === IN_PROGRESS;

  return (
    <div className={`${s.blockTask} ${blockTaskClass[status]}`} >
      <Checkbox onChange={handleChangeSelect} checked={selected} />
      <Input value={value} disabled />
      <div className={s.blockTask__button} >
        <Button
          color='warning'
          onClick={handleRejectedTask}
          disabled={isStatusButtonWarning}
        >
          <Icon className={s.blockTask__icon_rejected} type={REJECTED} />
        </Button>
        <Button
          color='info'
          onClick={handleTodoTask}
          disabled={isStatusButtonInfo}
        >
          <Icon type={IN_PROGRESS} />
        </Button>
        <Button
          color='success'
          onClick={handleCompletedTask}
          disabled={isStatusButtonSuccess}
        >
          <Icon type={COMPLETED} />
        </Button>
      </div>
    </div>
  );
};
