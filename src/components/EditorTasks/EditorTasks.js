import React, { useCallback, useMemo } from 'react';
import { Button } from '../../common/modules/Button/Button';
import { INFO, SUCCESS, WARNING } from '../../common/constants/constantsColorButton/constantsColorButton';
import { Icon } from '../../common/modules/Icons/Icons';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../common/constants/constantsTasks/constantsTasks';
import {
  completedTask,
  deleteTask,
  rejectedTask,
  tasksCollapsed,
  todoTask
} from '../../store/tasks/actionsTasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedTask, selectMarkedTask } from '../../store/selectedEntity/selectorSelects';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectTasks } from '../../store/tasks/selectorTasks';
import s from './EditTasks.module.css';

export const EditorTasks = () => {
  const dispatch = useDispatch();
  const markTasksId = useSelector(selectMarkedTask);
  const selectedTasks = useSelector(selectCheckedTask);
  const tasks = useSelector(selectTasks);
  const isVisebled = Object.values(selectedTasks).filter(item => item).length;

  const handleRejectedTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(rejectedTask(id));
      dispatch(setSelectTask({[id]: false}));
    });
  }, [dispatch, markTasksId]);

  const handleCompletedTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(completedTask(id));
      dispatch(setSelectTask({[id]: false}));
    });
  }, [dispatch, markTasksId]);

  const handleTodoTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(todoTask(id));
      dispatch(setSelectTask({[id]: false}));
    });
  }, [dispatch, markTasksId]);

  const handleEditorPosition = useMemo(() => isVisebled && s.collapsed, [selectedTasks]);

  const handleCollapsedRejectedTask = useCallback(() => {
    const collapsedTasks = tasks.filter(item => markTasksId.includes(item.id))

    dispatch(tasksCollapsed({...collapsedTasks}));
    dispatch(setSelectTask({[id]: false}));
    markTasksId.forEach((id) => {
      dispatch(deleteTask(id))
    })
  }, [dispatch, markTasksId, tasks]);

  if(!isVisebled) {
    return null;
  }

  return (
    <div className={`${s.tasksEditor} ${handleEditorPosition}`} >
      <span className={s.tasksEditor__name}>Tasks manager</span>
      <div className={s.tasksEditor__panel}>
        <Button color={WARNING} onClick={handleCollapsedRejectedTask} >
          <Icon type={REJECTED} />
        </Button>
        <Button color={INFO} onClick={handleTodoTask} >
          <Icon type={IN_PROGRESS} />
        </Button>
        <Button color={SUCCESS} onClick={handleCompletedTask} >
          <Icon type={COMPLETED} />
        </Button>
      </div>
    </div>
  );
};
