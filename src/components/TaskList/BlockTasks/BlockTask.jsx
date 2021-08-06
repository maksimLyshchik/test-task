import React, { useCallback } from 'react';
import { Input } from '../../common/Input/Input';
import { setSelectTask } from '../../../store/actions';
import { useDispatch } from 'react-redux';
import { Checkbox } from '../../common/Checkbox/Checkbox';
import s from './BlockTasks.module.css';

export const BlockTask = ({value, id, selected}) => {
  const dispatch = useDispatch();

  const handleChangeSelect = useCallback(({target}) => {
    const {checked} = target;
    dispatch(setSelectTask({[id]: checked}));
  }, [dispatch, id]);

  return (
    <div className={s.blockTask}>
      <Checkbox type='checkbox' onChange={handleChangeSelect} checked={selected}/>
      <Input value={value} disabled/>
    </div>
  );
};
