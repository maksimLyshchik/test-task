import React from 'react';
import { getDateNow } from '../../../../helpers/getDateNow';
import s from './BlockWithTime.module.css';

export const BlockWithTime = ({timeCreation, timeChange, status}) => {
  const isVisibledTimeChange = timeCreation !== timeChange;

  return (
    <div className={s.blockTask__block_time} >
      <div >Time created task: {getDateNow(timeCreation)} </div>
      {isVisibledTimeChange && <div >Time {status} task: {getDateNow(timeChange)} </div>}
    </div>
  );
};
