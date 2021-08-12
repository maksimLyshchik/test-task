import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, setSelectTask } from '../../store/actions';
import { getId } from '../../helpers/getUniqId';
import { Button } from '../common/Button/Button';
import { Input } from '../common/Input/Input';
import s from './AddTask.module.css';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();

  const handleSubmitTask = useCallback(() => {
    const id = getId();
    dispatch(addTask({value: task, id, time: Date.now()}));
    dispatch(setSelectTask({[id]: false}));
  }, [dispatch, task]);

  const handleChangeValue = useCallback(({target}) => {
    const {value} = target;
    setTask(value);
  }, []);

  return (
    <div className={s.add_task}>
      <Input onChange={handleChangeValue} placeholder='Enter task'/>
      <Button onClick={handleSubmitTask}>
        Add task
      </Button>
    </div>
  );
};
