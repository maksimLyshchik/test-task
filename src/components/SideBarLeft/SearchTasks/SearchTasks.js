import React, { useCallback } from 'react';
import { Input } from '../../../common/modules/Input/Input';
import { Icon } from '../../../common/modules/Icons/Icons';
import { useDispatch } from 'react-redux';
import { setValueForTaskSearch } from '../../../store/filter/thunk/setValueForTaskSearch';
import { OUTLINE } from '../../../common/constants/constantTypeInput/constantTypeInput';
import s from './SearchTasks.module.css';

export const SearchTasks = () => {
  const dispatch = useDispatch();

  const handleChangeValue = useCallback(({ target }) => {
    const { value } = target;

    dispatch(setValueForTaskSearch(value));
  }, [dispatch]);

  return (
    <div className={s.searchTasks}>
      <Icon type='search' fill='var(--light-blue)' />
      <Input type={OUTLINE} placeholder='Search task' onChange={handleChangeValue} />
    </div>
  );
};
