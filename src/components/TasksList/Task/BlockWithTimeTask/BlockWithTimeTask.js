import React from 'react';
import { formatDate } from '../../../../helpers/formatDate';
import s from './BlockWithTimeTask.module.css';

export const BlockWithTimeTask = ({timeCreation, timeChange, status}) => {
  const isVisibledTimeChange = timeCreation !== timeChange;

  return (
    <div className={s.blockTask__block_time} >
      <div >Time created task: {formatDate(timeCreation)} </div>
      {isVisibledTimeChange && <div >Time {status} task: {formatDate(timeChange)} </div>}
    </div>
  );
};
