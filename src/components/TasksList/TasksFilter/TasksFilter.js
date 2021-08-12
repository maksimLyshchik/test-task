import React from 'react';
import { RadioButton } from '../../../common/modules/RadioButton/RadioButton';
import s from './TasksFilter.module.css'

export const TasksFilter = () => {

  return (
    <div className={s.tasksFilter} >
      <span className={s.tasksFilter__name} >Status tasks filter </span>
      <div className={s.tasksFilter__list} >
        <RadioButton >completed</RadioButton>
        <RadioButton >rejected</RadioButton>
        <RadioButton >in progress</RadioButton>
      </div>
    </div>
  );
};
