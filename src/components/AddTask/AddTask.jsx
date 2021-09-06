import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../common/modules/Button/Button';
import { Input } from '../../common/modules/Input/Input';
import { addTaskThunkCreator } from '../../store/tasks/reducerTasks';
import { getId } from '../../helpers/getUniqId';
import { selectTasksId } from '../../store/tasks/selectorTasks';
import { PRIMARY, WARNING } from '../../common/constants/constantTypeInput/constantTypeInput';
import s from './AddTask.module.css';

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  const [typeInput, setTypeInput] = useState(PRIMARY);
  const tasksId = useSelector(selectTasksId);

  const handleSubmitTask = useCallback(() => {
    if (!task) {
      setTypeInput(WARNING);
      return;
    }

    const newId = getId(tasksId);
    setTypeInput(PRIMARY);

    dispatch(addTaskThunkCreator(task, newId));
  }, [dispatch, task, tasksId]);

  const handleChangeValue = useCallback(({ target }) => {
    const { value } = target;
    setTask(value);
    setTypeInput(PRIMARY);
  }, []);

  return (
    <div className={s.add_task}>
      <Input onChange={handleChangeValue} placeholder='Enter task' type={typeInput} />
      <Button onClick={handleSubmitTask}>
        Add task
      </Button>
    </div>
  );
};
