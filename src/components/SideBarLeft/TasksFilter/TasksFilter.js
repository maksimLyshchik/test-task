import React, { useCallback } from 'react';
import { RadioButton } from '../../../common/modules/RadioButton/RadioButton';
import { useDispatch } from 'react-redux';
import { setFilterTasks } from '../../../store/filter/actionsFilter';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import { INFO, PRIMARY, SUCCESS, WARNING } from '../../../common/constants/constantsColorButton/constantsColorButton';
import s from './TasksFilter.module.css';

export const TasksFilter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = useCallback(({target}) => {
    const {value} = target;

    dispatch(setFilterTasks({condition: value}));
  }, [dispatch]);

  return (
    <div className={s.tasksFilter__list}>
      <RadioButton
        onClick={handleChangeFilter}
        value={COMPLETED}
        name='filter'
        type={SUCCESS}
        id={SUCCESS}
        htmlFor={SUCCESS}
      >
        completed
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={REJECTED}
        name='filter'
        type={WARNING}
        id={WARNING}
        htmlFor={WARNING}
      >
        rejected
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={IN_PROGRESS}
        name='filter'
        type={INFO}
        id={INFO}
        htmlFor={INFO}
      >
        in progress
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={TODO}
        name='filter'
        type={PRIMARY}
        id={PRIMARY}
        htmlFor={PRIMARY}
      >
        show todo
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value='all'
        name='filter'
        type={PRIMARY}
        id={`${PRIMARY} 2`}
        htmlFor={`${PRIMARY} 2`}
      >
        show all
      </RadioButton>
    </div>
  );
};
