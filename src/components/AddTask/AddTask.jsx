import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectTask } from '../../store/selects/actionsSelects';
import { getId } from '../../helpers/getUniqId';
import { Button } from '../../common/modules/Button/Button';
import { Input } from '../../common/modules/Input/Input';
import { addTask } from '../../store/tasks/actionsTasks';
import { TODO } from '../../common/constants/constantsTasks/constantsTasks';
import s from './AddTask.module.css';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();

  const handleSubmitTask = useCallback(() => {
    const id = getId();
    dispatch(addTask({value: task, id, time: Date.now(), status: TODO}));
    dispatch(setSelectTask({[id]: false}));
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
