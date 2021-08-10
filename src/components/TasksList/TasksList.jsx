import React, { useCallback, useMemo } from 'react';
import { BlockTask } from './BlockTasks/BlockTask';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../../common/models/Checkbox/Checkbox';
import { setSelectTask } from '../../store/selects/actionsSelects';
import { getCheckedTasks } from '../../store/selects/selectorSelects';
import { getTasks } from '../../store/tasks/selectorTasks';
import s from './TasksList.module.css';

export const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const selectedTasks = useSelector(getCheckedTasks);

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
    <div className={s.TasksList}>
      <div className={s.TasksList__option}>
        <Checkbox name='checkedAll' type='checkbox' onChange={handleChange} checked={checkedAll}/>
        <span className={s.TasksList__option_name}>Selected all tasks</span>
      </div>
      {tasks.map(item => <BlockTask {...item} selected={selectedTasks[item.id]}/>)}
    </div>
  );
};
