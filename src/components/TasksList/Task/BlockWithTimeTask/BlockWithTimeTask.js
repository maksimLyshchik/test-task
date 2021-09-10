import React from 'react';
import { formatDate } from '../../../../helpers/formatDate';
import { StyledBlockWithTimeTask, StyledTimeTask } from './StyledBlockWithTimeTask';

export const BlockWithTimeTask = ({ timeCreation, timeChange, status }) => {
  const isVisibledTimeChange = !!timeChange;

  return (
    <StyledBlockWithTimeTask>
      <StyledTimeTask>Time created task: {formatDate(timeCreation)} </StyledTimeTask>
      <br/>
      {isVisibledTimeChange && <StyledTimeTask>Time {status} task: {formatDate(timeChange)} </StyledTimeTask>}
    </StyledBlockWithTimeTask>
  );
};
