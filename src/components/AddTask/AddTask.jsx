import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../common/modules/Button/Button';
import { Input } from '../../common/modules/Input/Input';
import { addingTask } from '../../store/tasks/thunkTasks';
import s from './AddTask.module.css';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();

  const handleSubmitTask = useCallback(() => {
    dispatch(addingTask(task));
  }, [dispatch, task]);

  const handleChangeValue = useCallback(({target}) => {
    const {value} = target;
    setTask(value);
  }, []);

  return (
    <div className={s.add_task} >
      <Input onChange={handleChangeValue} placeholder='Enter task' />
      <Button onClick={handleSubmitTask} >
        Add task
      </Button>
    </div>
  );
};
