import React, { useCallback, useMemo } from 'react';
import { BlockTask } from './BlockTask/BlockTask';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../../common/modules/Checkbox/Checkbox';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectCheckedTask } from '../../store/selectedEntity/selectorSelects';
import { selectFiltredTasks, selectFilter, selectSorting } from '../../store/filter/selectorFilter';
import { Button } from '../../common/modules/Button/Button';
import { setSorterTasks } from '../../store/filter/actionsFilter';
import { Icon } from '../../common/modules/Icons/Icons';
import { ASCENDING, DESCENDING } from '../../common/constants/constantsSort/constantsSort';
import s from './TasksList.module.css';

export const TasksList = () => {
  const dispatch = useDispatch();
  const selectedTasks = useSelector(selectCheckedTask);
  const filtredTasks = useSelector(selectFiltredTasks);
  const sortingRule = useSelector(selectSorting);
  const typeIcons = sortingRule === ASCENDING ? 'arrowDown' : 'arrowUp';

  const sortedTasks = filtredTasks.sort((itemPrev, itemPres) => {
    if (itemPrev.timeChange > itemPres.timeChange) {
      return sortingRule === DESCENDING ? -1 : 1;
    }
    if (itemPrev.timeChange < itemPres.timeChange) {
      return sortingRule === DESCENDING ? 1 : -1;
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

  const handleChangeSort = useCallback(() => {
    const changeSortingRule = sortingRule === ASCENDING ? DESCENDING : ASCENDING;

    dispatch(setSorterTasks({sorting: changeSortingRule}));
  }, [dispatch, sortingRule]);

  return (
    <div className={s.TasksList} >
      <div className={s.TasksList__header} >
        <div className={s.TasksList__header_checkbox} >
          <Checkbox name='checkedAll' onChange={handleChange} checked={checkedAll} />
          <span className={s.TasksList__header_name} >Selected all tasks </span>
        </div>
        <Button color='transparent' onClick={handleChangeSort} >
          <Icon type={typeIcons} width='20px' height='20px'/>
        </Button>
      </div>
      {sortedTasks.map(item => <BlockTask {...item} selected={selectedTasks[item.id]} />)}
    </div>
  );
};
