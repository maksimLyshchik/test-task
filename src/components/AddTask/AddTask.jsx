import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { getId } from '../../helpers/getUniqId';
import { Button } from '../../common/modules/Button/Button';
import { Input } from '../../common/modules/Input/Input';
import { addTask } from '../../store/tasks/actionsTasks';
import { TODO } from '../../common/constants/constantsTasks/constantsTasks';
import styled from 'styled-components';

const WrapperAddTask = styled.div`
  display: flex;
  padding: 0 0 10px 72px;
`;

export const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState();

  const handleSubmitTask = useCallback(() => {
    const id = getId();
    dispatch(addTask({ value: task, id, timeCreation: Date.now(), status: TODO, timeChange: Date.now() }));
    dispatch(setSelectTask({ [id]: false }));
  }, [dispatch, task]);

  const handleChangeValue = useCallback(({ target }) => {
    const { value } = target;
    setTask(value);
  }, []);

  return (
    <WrapperAddTask>
      <Input onChange={handleChangeValue} placeholder='Enter task' />
      <Button onClick={handleSubmitTask}>
        Add task
      </Button>
    </WrapperAddTask>
  );
};
