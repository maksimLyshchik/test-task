import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../common/modules/Button/Button';
import { Icon } from '../../../../common/modules/Icons/Icons';
import { completedTask, rejectedTask, todoTask } from '../../../../store/tasks/actionsTasks';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../../../common/constants/constantsTasks/constantsTasks';
import { INFO, SUCCESS, WARNING } from '../../../../common/constants/constantsColorButton/constantsColorButton';
import { StyledTaskActionBlock } from './StyledTaskAction';

export const TaskActions = ({ id, status }) => {
  const dispatch = useDispatch();
  const isRejectedTask = status === REJECTED;
  const isSuccessTask = status === COMPLETED;
  const isStatusButtonInfo = isRejectedTask || isSuccessTask || status === IN_PROGRESS;

  const handleRejectedTask = useCallback(() => {
    dispatch(rejectedTask(id));
  }, [dispatch, id]);

  const handleCompletedTask = useCallback(() => {
    dispatch(completedTask(id));
  }, [dispatch, id]);

  const handleTodoTask = useCallback(() => {
    dispatch(todoTask(id));
  }, [dispatch, id]);

  return (
    <StyledTaskActionBlock>
      <Button
        color={WARNING}
        onClick={handleRejectedTask}
        disabled={isRejectedTask || isSuccessTask}
      >
        <Icon type={REJECTED} />
      </Button>
      <Button
        color={INFO}
        onClick={handleTodoTask}
        disabled={isStatusButtonInfo}
      >
        <Icon type={IN_PROGRESS} />
      </Button>
      <Button
        color={SUCCESS}
        onClick={handleCompletedTask}
        disabled={isSuccessTask || isRejectedTask}
      >
        <Icon type={COMPLETED} />
      </Button>
    </StyledTaskActionBlock>
  );
};
