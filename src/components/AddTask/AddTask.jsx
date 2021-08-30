import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { getId } from '../../helpers/getUniqId';
import { Button } from '../../common/modules/Button/Button';
import { Input } from '../../common/modules/Input/Input';
import { addTask } from '../../store/tasks/actionsTasks';
import { TODO } from '../../common/constants/constantsTasks/constantsTasks';
import { selectTasksCount } from '../../store/tasks/selectorTasks';
import s from './AddTask.module.css';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  const tasksCount = useSelector(selectTasksCount);

  const handleSubmitTask = useCallback(() => {
    const id = getId();
    dispatch(addTask({value: task, id: tasksCount + id, timeCreation: Date.now(), status: TODO, timeChange: Date.now()}));
    dispatch(setSelectTask({[tasksCount + id]: false}));
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
