import React, { useCallback, useMemo } from 'react';
import { BlockTask } from './BlockTasks/BlockTask';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedTask, selectTasks } from '../../store/selector';
import { Checkbox } from '../common/Checkbox/Checkbox';
import { setSelectTask } from '../../store/actions';
import s from './TaskList.module.css';

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const selectedTasks = useSelector(selectCheckedTask);

  const handleChange = useCallback(({target}) => {
    const {checked} = target;
    let selectAll = {};
    Object.keys(selectedTasks).forEach(key => selectAll[key] = checked);
    dispatch(setSelectTask(selectAll));
  }, [dispatch, selectedTasks]);

  const checkedAll = useMemo(() => {
    if (!selectedTasks) {
      return false;
    }

    const taskIds = Object.values(selectedTasks);
    const {length} = taskIds;

    return Boolean(length) && length === taskIds.filter(value => value).length;
  }, [selectedTasks]);

  return (
    <div className={s.TaskList}>
      <div className={s.TaskList__option}>
        <Checkbox name='checkedAll' type='checkbox' onChange={handleChange} checked={checkedAll}/>
        <span className={s.TaskList__option_name}>Selected all tasks</span>
      </div>
      {tasks.map(item => <BlockTask {...item} selected={selectedTasks[item.id]}/>)}
    </div>
  );
};
