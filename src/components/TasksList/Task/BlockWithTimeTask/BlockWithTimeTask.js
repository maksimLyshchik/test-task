import React from 'react';
import { formatDate } from '../../../../helpers/formatDate';
import { StyledTimeBlock } from './StyledBlockWithTimeTask';

export const BlockWithTimeTask = ({ timeCreation, timeChange, status }) => {
  const isVisibledTimeChange = timeCreation !== timeChange;

  return (
    <StyledTimeBlock>
      <span>Time created task: {formatDate(timeCreation)} </span>
      {isVisibledTimeChange && <span>Time {status} task: {formatDate(timeChange)} </span>}
    </StyledTimeBlock>
  );
};
