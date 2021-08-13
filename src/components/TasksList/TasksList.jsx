import React, { useCallback, useMemo } from 'react';
import { BlockTask } from './BlockTasks/BlockTask';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../../common/modules/Checkbox/Checkbox';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectCheckedTask } from '../../store/selectedEntity/selectorSelects';
import { TasksFilter } from './TasksFilter/TasksFilter';
import { selectFiltredTasks, selectFilter } from '../../store/filter/selectorFilter';
import s from './TasksList.module.css';

export const TasksList = () => {
  const dispatch = useDispatch();
  const selectedTasks = useSelector(selectCheckedTask);
  const filtredTasks = useSelector(selectFiltredTasks);
  const sortingRule = useSelector(selectFilter);

  const sortedTasks = filtredTasks.sort((itemPrev, itemPres) => {
    if (itemPrev.timeChange > itemPres.timeChange) {
      return sortingRule.sorting === 'down' ? -1 : 1;
    } if (itemPrev.timeChange < itemPres.timeChange) {
      return sortingRule.sorting === 'down' ? 1 : -1;
    }
    return 0;
  });

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
    <div className={s.TasksList} >
      <div className={s.TasksList__header} >
        <div className={s.TasksList__header_checkbox} >
          <Checkbox name='checkedAll' onChange={handleChange} checked={checkedAll} />
          <span className={s.TasksList__header_name} >Selected all tasks</span>
        </div>
        <TasksFilter />
      </div>
      {sortedTasks.map(item => <BlockTask {...item} selected={selectedTasks[item.id]} />)}
    </div>
  );
};
