import React, { useCallback, useMemo } from 'react';
import { BlockTask } from './BlockTasks/BlockTask';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../../common/modules/Checkbox/Checkbox';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectCheckedTask } from '../../store/selectedEntity/selectorSelects';
import { selectTasks } from '../../store/tasks/selectorTasks';
import { TasksFilter } from './TasksFilter/TasksFilter';
import {
  selectCompletedTasks,
  selectFilter,
  selectInProgressTasks,
  selectRejectedTasks
} from '../../store/filter/selectorFilter';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../common/constants/constantsTasks/constantsTasks';
import s from './TasksList.module.css';

export const TasksList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const selectedTasks = useSelector(selectCheckedTask);
  const filterStatus = useSelector(selectFilter);
  const completedTasks = useSelector(selectCompletedTasks);
  const rejectedTasks = useSelector(selectRejectedTasks);
  const inProgressTasks = useSelector(selectInProgressTasks);

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

  const filtredTasks = useMemo(() => {
    const conditionsFilter = filterStatus.condition;

    if (conditionsFilter === COMPLETED) {
      return completedTasks;
    } else if (conditionsFilter === REJECTED) {
      return rejectedTasks;
    } else if (conditionsFilter === IN_PROGRESS) {
      return inProgressTasks;
    }
    return tasks;
  }, [completedTasks, filterStatus, inProgressTasks, rejectedTasks, tasks]);

  const sortedTasks = filtredTasks.sort((itemPrev, itemPres) => {
    if (itemPrev.timeChange > itemPres.timeChange) {
      return 1
    } else if (itemPrev.timeChange < itemPres.timeChange) {
      return -1
    }
    return 0
  });

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
