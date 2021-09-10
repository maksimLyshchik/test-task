import React, { useMemo } from 'react';
import { TextArea } from '../../../../common/modules/TextArea/TextArea';
import { StyledWrapperTaskContent } from './StyledTaskContent';

export const TaskContent = ({ task }) => {
  const { value } = task;
  const isMultiplayTask = !!task?.subtasks;

  const content = useMemo(() => {
    if (isMultiplayTask) {
      return Object.values(task.subtasks).map(item => <TextArea key={item.id} value={item.value} disabled />);
    }

    return <TextArea value={value} disabled />;
  }, [isMultiplayTask, task, value]);

  return (
    <StyledWrapperTaskContent>
      {content}
    </StyledWrapperTaskContent>
  );
};
