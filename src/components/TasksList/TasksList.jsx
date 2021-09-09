import React, { useCallback, useMemo } from 'react';
import { Task } from './Task/Task';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from '../../common/modules/Checkbox/Checkbox';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectCheckedTask } from '../../store/selectedEntity/selectorSelects';
import { selectFiltredTasks, selectSorting, selectValueSearch } from '../../store/filter/selectorFilter';
import { Button } from '../../common/modules/Button/Button';
import { setSorterTasks } from '../../store/filter/actionsFilter';
import { Icon } from '../../common/modules/Icons/Icons';
import { ASCENDING, DESCENDING } from '../../common/constants/constantsSort/constantsSort';
import { OUTLINE } from '../../common/constants/constantsColorButton/constantsColorButton';
import {
  StyledHeaderBlockCheckbox,
  StyledHeaderName,
  StyledInitialText,
  StyledTaskListHeader,
  StyledWrapperTaskList,
} from './StyledTaskList';

export const TasksList = () => {
  const dispatch = useDispatch();
  const selectedTasks = useSelector(selectCheckedTask);
  const filtredTasks = useSelector(selectFiltredTasks);
  const sortingRule = useSelector(selectSorting);
  const valueSearch = useSelector(selectValueSearch);
  const typeIcons = sortingRule === ASCENDING ? 'arrowDown' : 'arrowUp';

  const searchTasks = useMemo(() => {
    if (valueSearch) {
      return filtredTasks.filter(
        task => task.subtasks ?
          Object.values(task.subtasks).filter(subtask => subtask.value?.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1).length :
          task.value?.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1,
      );
    }

    return filtredTasks;
  }, [filtredTasks, valueSearch]);

  const sortedTasks = useMemo(() => {
    return (
      searchTasks.sort((itemPrev, itemPres) => {
        const compareTime = itemPrev.timeChange || itemPres.timeChange
          ? 'timeChange' : 'timeCreation';

        if (itemPrev[compareTime] > itemPres[compareTime]) {
          return sortingRule === DESCENDING ? -1 : 1;
        }
        if (itemPrev[compareTime] < itemPres[compareTime]) {
          return sortingRule === DESCENDING ? 1 : -1;
        }
        return null;
      })
    );
  }, [searchTasks, sortingRule]);

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
      <StyledInitialText>
        <span>Nothing to show </span>
      </StyledInitialText>
    );
  }

  return (
    <StyledWrapperTaskList>
      <StyledTaskListHeader>
        <StyledHeaderBlockCheckbox>
          <Checkbox name='checkedAll' onChange={handleChange} checked={checkedAll} />
          <StyledHeaderName>Selected all tasks </StyledHeaderName>
        </StyledHeaderBlockCheckbox>
        <Button color={OUTLINE} onClick={handleChangeSort}>
          <Icon type={typeIcons} width='20px' height='20px' />
        </Button>
      </StyledTaskListHeader>
      {sortedTasks.map(item => <Task key={item.id} task={item} />)}
    </StyledWrapperTaskList>
  );
};
