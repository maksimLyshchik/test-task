import React, { useCallback } from 'react';
import { RadioButton } from '../../../common/modules/RadioButton/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTasks } from '../../../store/filter/actionsFilter';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO, ALL } from '../../../common/constants/constantsTasks/constantsTasks';
import { INFO, PRIMARY, SUCCESS, WARNING } from '../../../common/constants/constantsColorButton/constantsColorButton';
import { selectFilter } from '../../../store/filter/selectorFilter';
import { StyledWrapperTaskFilter } from './StyledTaskFilter';

export const TasksFilter = () => {
  const dispatch = useDispatch();
  const {condition} = useSelector(selectFilter)
  const isCheckedRadioButtonAll = condition === ALL;
  const isCheckedRadioButtonCompleted = condition === COMPLETED;
  const isCheckedRadioButtonRejected = condition === REJECTED;
  const isCheckedRadioButtonInProgress = condition === IN_PROGRESS;
  const isCheckedRadioButtonTodo = condition === TODO;

  const handleChangeFilter = useCallback(({target}) => {
    const {value} = target;

    dispatch(setFilterTasks({condition: value}));
  }, [dispatch]);

  return (
    <StyledWrapperTaskFilter>
      <RadioButton
        onClick={handleChangeFilter}
        value={ALL}
        name='filter'
        color={PRIMARY}
        id={`${PRIMARY} 2`}
        htmlFor={`${PRIMARY} 2`}
        checked={isCheckedRadioButtonAll}
      >
        show all
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={COMPLETED}
        name='filter'
        color={SUCCESS}
        id={SUCCESS}
        htmlFor={SUCCESS}
        checked={isCheckedRadioButtonCompleted}
      >
        completed
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={REJECTED}
        name='filter'
        color={WARNING}
        id={WARNING}
        htmlFor={WARNING}
        checked={isCheckedRadioButtonRejected}
      >
        rejected
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={IN_PROGRESS}
        name='filter'
        color={INFO}
        id={INFO}
        htmlFor={INFO}
        checked={isCheckedRadioButtonInProgress}
      >
        in progress
      </RadioButton>
      <RadioButton
        onClick={handleChangeFilter}
        value={TODO}
        name='filter'
        color={PRIMARY}
        id={PRIMARY}
        htmlFor={PRIMARY}
        checked={isCheckedRadioButtonTodo}
      >
        todo
      </RadioButton>
    </StyledWrapperTaskFilter>
  );
};
