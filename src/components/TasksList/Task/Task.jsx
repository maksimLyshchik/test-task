import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectTask } from '../../../store/selectedEntity/actionsSelects';
import { Checkbox } from '../../../common/modules/Checkbox/Checkbox';
import { COMPLETED, REJECTED } from '../../../common/constants/constantsTasks/constantsTasks';
import { TaskActions } from './TaskActions/TaskActions';
import { selectCheckedTask } from '../../../store/selectedEntity/selectorSelects';
import { TaskContent } from './TaskContent/TaskContent';
import { BlockWithTimeTask } from './BlockWithTimeTask/BlockWithTimeTask';
import { StyledTaskMainBlock, StyledWrapperTask } from './StyledTask';


export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const { id, status, timeCreation, timeChange } = task;
  const selectedTasks = useSelector(selectCheckedTask);
  const isRejectedTask = status === REJECTED;
  const isSuccessTask = status === COMPLETED;

  const handleChangeSelect = useCallback(({ target }) => {
    const { checked } = target;
    dispatch(setSelectTask({ [id]: checked }));
  }, [dispatch, id]);

  return (
    <StyledWrapperTask status={status}>
      <StyledTaskMainBlock>
        <Checkbox
          onChange={handleChangeSelect}
          checked={selectedTasks[id]}
          disabled={isRejectedTask || isSuccessTask}
        />
        <TaskContent task={task} />
        <TaskActions id={id} status={status} />
      </StyledTaskMainBlock>
      <BlockWithTimeTask
        timeCreation={timeCreation}
        timeChange={timeChange}
        status={status}
      />
    </StyledWrapperTask>
  );
};
