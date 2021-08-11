import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/actions';
import { getId } from '../../helpers/getUniqId';
import { Button } from '../common/Button/Button';
import { Input } from '../common/Input/Input';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();

  const handleSubmitTask = useCallback(() => {
    console.log('event');
    dispatch(addTask({value: task, id: getId(), time: Date.now()}));
  }, [dispatch, task]);

  const handleChangeValue = useCallback(({target}) => {
    const {value} = target;
    setTask(value);
  }, []);

  return (
    <div>
      <Input onChange={handleChangeValue} placeholder='Enter task'/>
      <Button onClick={handleSubmitTask}>
        Add task
      </Button>
    </div>
  );
};