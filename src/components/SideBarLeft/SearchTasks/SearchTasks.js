import React, { useCallback } from 'react';
import { Input } from '../../../common/modules/Input/Input';
import { Icon } from '../../../common/modules/Icons/Icons';
import { useDispatch } from 'react-redux';
import { setSearchTasks } from '../../../store/filter/actionsFilter';
import { debounce } from '../../../helpers/debounce';
import s from './SearchTasks.module.css';

export const SearchTasks = () => {
  const dispatch = useDispatch();

  const handleChangeValue = useCallback(({ target }) => {
    const { value } = target;

    if (value.length > 2 || value.length === 0) {
      const dispatchValue = () => dispatch(setSearchTasks({ value }));

      const debounceDispatchValue = debounce(dispatchValue, 500);

      debounceDispatchValue();
    }
  }, [dispatch]);

  return (
    <div className={s.searchTasks}>
      <Icon type='search' fill='var(--light-blue)' />
      <Input type='search' placeholder='Search task' onChange={handleChangeValue} />
    </div>
  );
};
