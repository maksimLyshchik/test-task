import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../common/modules/Button/Button';
import { Input } from '../../common/modules/Input/Input';
import { selectTasksCount } from '../../store/tasks/selectorTasks';
import { addTaskThunkCreator } from '../../store/tasks/reducerTasks';
import s from './AddTask.module.css';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  let tasksCount = useSelector(selectTasksCount);

  const handleSubmitTask = useCallback(() => {
    dispatch(addTaskThunkCreator(task, tasksCount));
  }, [dispatch, task, tasksCount]);

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
