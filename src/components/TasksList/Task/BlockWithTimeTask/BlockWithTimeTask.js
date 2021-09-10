import React from 'react';
import { formatDate } from '../../../../helpers/formatDate';
import { StyledBlockWithTimeTask } from './StyledBlockWithTimeTask';

export const BlockWithTimeTask = ({ timeCreation, timeChange, status }) => {
  const isVisibledTimeChange = !!timeChange;

  return (
    <StyledBlockWithTimeTask>
      <span>Time created task: {formatDate(timeCreation)} </span>
      {isVisibledTimeChange && <span>Time {status} task: {formatDate(timeChange)} </span>}
    </StyledBlockWithTimeTask>
  );
};
