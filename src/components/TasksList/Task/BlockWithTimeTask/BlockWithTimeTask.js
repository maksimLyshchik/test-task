import React from 'react';
import { formatDate } from '../../../../helpers/formatDate';
import { TimeBlock } from './StyledBlockWithTimeTask';

export const BlockWithTimeTask = ({ timeCreation, timeChange, status }) => {
  const isVisibledTimeChange = timeCreation !== timeChange;

  return (
    <TimeBlock>
      <span>Time created task: {formatDate(timeCreation)} </span>
      {isVisibledTimeChange && <span>Time {status} task: {formatDate(timeChange)} </span>}
    </TimeBlock>
  );
};
