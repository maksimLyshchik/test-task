import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../common/modules/Button/Button';
import { Input } from '../../common/modules/Input/Input';
import { addingTask } from '../../store/tasks/thunkTasks';
import { getId } from '../../helpers/getUniqId';
import { selectTasksId } from '../../store/tasks/selectorTasks';
import { validation } from '../../store/validator/thunkValidation/validation';
import styled from 'styled-components';

const StyledWrapperAddTask = styled.div`
  display: flex;
  padding: 0 0 10px 72px;
`;

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();
  const tasksId = useSelector(selectTasksId);

  const handleSubmitTask = useCallback(() => {
    if (!task) {
      return;
    }

    const newId = getId(tasksId);

    dispatch(addingTask(task, newId));
  }, [dispatch, task, tasksId]);

  const handleChangeValue = useCallback(({ target }) => {
    const { value } = target;
    setTask(value);
  }, []);

  return (
    <StyledWrapperAddTask>
      <Input
        onChange={handleChangeValue}
        placeholder='Enter task'
        required
        id='inputAddTask'
        value={task}
        validation={validation}
      />
      <Button onClick={handleSubmitTask}>
        Add task
      </Button>
    </StyledWrapperAddTask>
  );
};
