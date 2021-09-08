import React, { useCallback } from 'react';
import { Button } from '../../common/modules/Button/Button';
import { INFO, PRIMARY, SUCCESS, WARNING } from '../../common/constants/constantsColorButton/constantsColorButton';
import { Icon } from '../../common/modules/Icons/Icons';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../common/constants/constantsTasks/constantsTasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedTask, selectMarkedTask } from '../../store/selectedEntity/selectorSelects';
import { selectObjectTasks } from '../../store/tasks/selectorTasks';
import { selectSettings } from '../../store/componentsSettings/selectorcomponentsSettings';
import {
  collapsingTask,
  completingTask,
  rejectingTask,
  splittingTask,
  todoingTask,
} from '../../store/tasks/thunkTasks';
import s from './EditTasks.module.css';

export const EditorTasks = () => {
  const dispatch = useDispatch();
  const markTasksId = useSelector(selectMarkedTask);
  const selectedTasks = useSelector(selectCheckedTask);
  const tasks = useSelector(selectObjectTasks);
  const { isVisibledSidebar } = useSelector(selectSettings);
  const isVisebled = Object.values(selectedTasks).filter(item => item).length;
  const isChangePosition = isVisebled && s.collapsed;
  const tasksEditor__stretch = isVisibledSidebar === 'collapsed' ? s.tasksEditor__stretch : '';

  const handleRejectedTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(rejectingTask(id));
    });
  }, [dispatch, markTasksId]);

  const handleCompletedTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(completingTask(id));
    });
  }, [dispatch, markTasksId]);

  const handleTodoTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(todoingTask(id));
    });
  }, [dispatch, markTasksId]);

  const handleCollapsedTask = useCallback(() => dispatch(collapsingTask(tasks, markTasksId)), [dispatch, markTasksId, tasks]);

  const handleSplitTask = useCallback(() => dispatch(splittingTask(tasks, markTasksId)), [dispatch, markTasksId, tasks]);

  if (!isVisebled) {
    return null;
  }

  return (
    <div className={`${s.tasksEditor} ${isChangePosition} ${tasksEditor__stretch}`}>
      <span className={s.tasksEditor__name}>Tasks manager</span>
      <div className={s.tasksEditor__panel}>
        <Button color={WARNING} onClick={handleRejectedTask}>
          <Icon type={REJECTED} />
        </Button>
        <Button color={INFO} onClick={handleTodoTask}>
          <Icon type={IN_PROGRESS} />
        </Button>
        <Button color={SUCCESS} onClick={handleCompletedTask}>
          <Icon type={COMPLETED} />
        </Button>
        <Button color={PRIMARY} onClick={handleCollapsedTask}>
          <Icon type='collapsed' />
        </Button>
        <Button color={PRIMARY} onClick={handleSplitTask}>
          <Icon type='breakUp' />
        </Button>
      </div>
    </div>
  );
};
