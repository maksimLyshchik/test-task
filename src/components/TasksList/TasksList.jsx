import React, { useCallback, useMemo } from 'react';
import { Task } from './Task/Task';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../../common/modules/Checkbox/Checkbox';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectCheckedTask } from '../../store/selectedEntity/selectorSelects';
import { selectFiltredTasks, selectSorting } from '../../store/filter/selectorFilter';
import { Button } from '../../common/modules/Button/Button';
import { setSorterTasks } from '../../store/filter/actionsFilter';
import { Icon } from '../../common/modules/Icons/Icons';
import { ASCENDING, DESCENDING } from '../../common/constants/constantsSort/constantsSort';
import { OUTLINE } from '../../common/constants/constantsColorButton/constantsColorButton';
import {
  HeaderBlockCheckbox,
  HeaderName,
  InitialText,
  TaskListHeader,
  WrapperTaskList,
} from './StyledTaskList';

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

  const handleChange = useCallback(({ target }) => {
    const { checked } = target;
    let selectAll = {};
    filtredTasks.forEach(({ id }) => selectAll[id] = checked);
    dispatch(setSelectTask(selectAll));
  }, [dispatch, filtredTasks]);

  const checkedAll = useMemo(() => {
    if (!selectedTasks) {
      return false;
    }

    return Boolean(filtredTasks.length) && filtredTasks.length === Object.values(selectedTasks).filter(value => value).length;
  }, [selectedTasks, filtredTasks]);

  const handleChangeSort = useCallback(() => {
    const changeSortingRule = sortingRule === ASCENDING ? DESCENDING : ASCENDING;

    dispatch(setSorterTasks({ sorting: changeSortingRule }));
  }, [dispatch, sortingRule]);

  if (!sortedTasks || !sortedTasks.length) {
    return (
      <InitialText>
        <span>Nothing to show </span>
      </InitialText>
    );
  }

  return (
    <WrapperTaskList>
      <TaskListHeader>
        <HeaderBlockCheckbox>
          <Checkbox name='checkedAll' onChange={handleChange} checked={checkedAll} />
          <HeaderName>Selected all tasks </HeaderName>
        </HeaderBlockCheckbox>
        <Button color={OUTLINE} onClick={handleChangeSort}>
          <Icon type={typeIcons} width='20px' height='20px' />
        </Button>
      </TaskListHeader>
      {sortedTasks.map(item => <Task key={item.id} task={item} />)}
    </WrapperTaskList>
  );
};
