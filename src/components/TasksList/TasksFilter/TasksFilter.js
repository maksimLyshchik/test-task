import React, { useCallback } from 'react';
import { RadioButton } from '../../../common/modules/RadioButton/RadioButton';
import { useDispatch } from 'react-redux';
import { setFilterTasks } from '../../../store/filter/actionsFilter';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import s from './TasksFilter.module.css';

export const TasksFilter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = useCallback(({target}) => {
    const {value} = target;

    dispatch(setFilterTasks({condition: value}));
  }, [dispatch]);

  return (
    <div className={s.tasksFilter} >
      <span className={s.tasksFilter__name} >Status tasks filter </span>
      <div className={s.tasksFilter__list} >
        <RadioButton onClick={handleChangeFilter} value={COMPLETED} name='filter'>completed</RadioButton>
        <RadioButton onClick={handleChangeFilter} value={REJECTED} name='filter' >rejected</RadioButton>
        <RadioButton onClick={handleChangeFilter} value={IN_PROGRESS} name='filter' >in progress</RadioButton>
        <RadioButton onClick={handleChangeFilter} value={TODO} name='filter' >show todo</RadioButton>
      </div>
    </div>
  );
};
