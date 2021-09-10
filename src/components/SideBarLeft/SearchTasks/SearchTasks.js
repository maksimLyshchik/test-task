import React, { useCallback } from 'react';
import { Input } from '../../../common/modules/Input/Input';
import { Icon } from '../../../common/modules/Icons/Icons';
import { useDispatch } from 'react-redux';
import { setValueForTaskSearch } from '../../../store/filter/thunk/setValueForTaskSearch';
import { OUTLINE } from '../../../common/constants/constantTypeInput/constantTypeInput';
import { StyledSearchTasks } from './StyledSearchTasks';
import { rootColors } from '../../../common/constants/constantsRootColors/constantsRootColors';

export const SearchTasks = () => {
  const dispatch = useDispatch();

  const handleChangeValue = useCallback(({ target }) => {
    const { value } = target;

    dispatch(setValueForTaskSearch(value));
  }, [dispatch]);

  return (
    <StyledSearchTasks>
      <Icon type='search' fill={rootColors['lightBlue']} />
      <Input type={OUTLINE} placeholder='Search task' onChange={handleChangeValue} />
    </StyledSearchTasks>
  );
};
