import React, { useCallback } from 'react';
import { Input } from '../../../common/modules/Input/Input';
import { useDispatch } from 'react-redux';
import { setSelectTask } from '../../../store/selectedEntity/actionsSelects';
import { Checkbox } from '../../../common/modules/Checkbox/Checkbox';
import { Button } from '../../../common/modules/Button/Button';
import { Icon } from '../../../common/modules/Icons/Icons';
import { completedTask, rejectedTask, taskChangeTime, todoTask } from '../../../store/tasks/actionsTasks';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../../common/constants/constantsTasks/constantsTasks';
import { INFO, SUCCESS, WARNING } from '../../../common/constants/constantsColorButton/constantsColorButton';
import { TextArea } from '../../../common/modules/TextArea/TextArea';
import s from './BlockTask.module.css';

const blockTaskClass = {
  primary: s.blockTask,
  completed: s.completed,
  rejected: s.rejected,
  in_progress: s.inProgress,
};

export const BlockTask = ({value, id, time, timeChange, selected, status}) => {
  const dispatch = useDispatch();
  const isRejectedTask = status === REJECTED;
  const isSuccessTask = status === COMPLETED;
  const isStatusButtonInfo = isRejectedTask || isSuccessTask || status === IN_PROGRESS;

  const handleChangeSelect = useCallback(({target}) => {
    const {checked} = target;
    dispatch(setSelectTask({[id]: checked}));
  }, [dispatch, id]);

  const handleRejectedTask = useCallback(() => {
    dispatch(rejectedTask(id));
  }, [dispatch, id]);

  const handleCompletedTask = useCallback(() => {
    dispatch(completedTask(id));
  }, [dispatch, id]);

  const handleTodoTask = useCallback(() => {
    dispatch(todoTask(id));
  }, [dispatch, id]);

  return (
    <div className={`${s.blockTask} ${blockTaskClass[status]}`} >
      <div className={s.blockTask__main} >
        <Checkbox onChange={handleChangeSelect} checked={selected} />
        <TextArea value={value} disabled />
        <div className={s.blockTask__button} >
          <Button
            color={WARNING}
            onClick={handleRejectedTask}
            disabled={isRejectedTask || isSuccessTask}
          >
            <Icon className={s.blockTask__icon_rejected} type={REJECTED} />
          </Button>
          <Button
            color={INFO}
            onClick={handleTodoTask}
            disabled={isStatusButtonInfo}
          >
            <Icon type={IN_PROGRESS} />
          </Button>
          <Button
            color={SUCCESS}
            onClick={handleCompletedTask}
            disabled={isSuccessTask || isRejectedTask}
          >
            <Icon type={COMPLETED} />
          </Button>
        </div>
      </div>
      <div className={s.blockTask__block_time}>
        <div>Time change task: {timeChange}</div>
      </div>
    </div>
  );
};
