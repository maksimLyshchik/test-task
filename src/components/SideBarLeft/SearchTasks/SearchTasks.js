import React from 'react';
import { Input } from '../../../common/modules/Input/Input';
import { Icon } from '../../../common/modules/Icons/Icons';
import s from './SearchTasks.module.css';

export const SearchTasks = () => {

  return (
    <div className={s.searchTasks}>
      <Icon type='search' fill='var(--light-blue)' />
      <Input type='search' placeholder='Search task' />
    </div>
  );
};
