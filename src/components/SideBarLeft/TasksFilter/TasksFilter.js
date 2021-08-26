import React, { useCallback } from 'react';
import { RadioButton } from '../../../common/modules/RadioButton/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTasks } from '../../../store/filter/actionsFilter';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO, ALL } from '../../../common/constants/constantsTasks/constantsTasks';
import { INFO, PRIMARY, SUCCESS, WARNING } from '../../../common/constants/constantsColorButton/constantsColorButton';
import s from './TasksFilter.module.css';
import { selectFilter } from '../../../store/filter/selectorFilter';

export const TasksFilter = () => {
  const dispatch = useDispatch();
  const {condition} = useSelector(selectFilter)

  const handleChangeFilter = useCallback(({target}) => {
    const {value} = target;

    dispatch(setFilterTasks({condition: value}));
  }, [dispatch]);

  return (
    <div className={s.tasksFilter__list}>
      <RadioButton
        onClick={handleChangeFilter}
        value={ALL}
        name='filter'
        type={PRIMARY}
        id={`${PRIMARY} 2`}
        htmlFor={`${PRIMARY} 2`}
        checked={condition === ALL}
      >
        show all
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={COMPLETED}
        name='filter'
        type={SUCCESS}
        id={SUCCESS}
        htmlFor={SUCCESS}
        checked={condition === COMPLETED}
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
        checked={condition === REJECTED}
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
        checked={condition === IN_PROGRESS}
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
        checked={condition === TODO}
      >
        todo
      </RadioButton>
    </div>
  );
};
