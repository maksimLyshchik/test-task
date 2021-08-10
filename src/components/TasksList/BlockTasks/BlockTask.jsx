import React, { useCallback, useMemo } from 'react';
import { Input } from '../../../common/models/Input/Input';
import { useDispatch } from 'react-redux';
import { setSelectTask } from '../../../store/selects/actionsSelects';
import { Checkbox } from '../../../common/models/Checkbox/Checkbox';
import { Button } from '../../../common/models/Button/Button';
import { Icon } from '../../../common/models/Icons/Icons';
import { completedTask, rejectedTask, todoTask } from '../../../store/tasks/actionsTasks';
import s from './BlockTasks.module.css';
import { COMPLETED, REJECTED, TODO } from '../../../common/constants/constantsTasks/constantsTasks';

const blockTaskClass = {
  primary: s.blockTask,
  completed: s.completed,
  rejected: s.rejected,
  todo: s.todo,
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
  }, [dispatch, id]);

  const handleTodoTask = useCallback(() => {
    dispatch(todoTask(id));
  }, [dispatch, id]);

  const isStatusTaskRejected = useMemo(() => {
    return status === REJECTED;
  }, [status]);

  const isStatusTaskCompleted = useMemo(() => {
    return status === COMPLETED;
  }, [status]);

  const isStatusTaskTodo = useMemo(() => {
    return status === TODO;
  }, [status]);

  return (
    <div className={`${s.blockTask} ${blockTaskClass[status]}`}>
      <Checkbox type='checkbox' onChange={handleChangeSelect} checked={selected}/>
      <Input value={value} disabled/>
      <div className={s.blockTask__button}>
        <Button color={REJECTED} onClick={handleRejectedTask} disabled={isStatusTaskRejected || isStatusTaskCompleted}>
          <Icon className={s.blockTask__icon_rejected} type={REJECTED}/>
        </Button>
        <Button color={TODO} onClick={handleTodoTask}
                disabled={isStatusTaskRejected || isStatusTaskCompleted || isStatusTaskTodo}>
          <Icon type={TODO}/>
        </Button>
        <Button color={COMPLETED} onClick={handleCompletedTask}
                disabled={isStatusTaskRejected || isStatusTaskCompleted}>
          <Icon type={COMPLETED}/>
        </Button>
      </div>
    </div>
  );
};
