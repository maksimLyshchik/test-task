import React, { useCallback, useMemo } from 'react';
import { Button } from '../../common/modules/Button/Button';
import { INFO, PRIMARY, SUCCESS, WARNING } from '../../common/constants/constantsColorButton/constantsColorButton';
import { Icon } from '../../common/modules/Icons/Icons';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../common/constants/constantsTasks/constantsTasks';
import {
  addTask,
  completedTask,
  deleteTask,
  rejectedTask,
  todoTask
} from '../../store/tasks/actionsTasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedTask, selectMarkedTask } from '../../store/selectedEntity/selectorSelects';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectObjectTasks } from '../../store/tasks/selectorTasks';
import { getId } from '../../helpers/getUniqId';
import { selectSettings } from '../../store/componentsSettings/selectorcomponentsSettings';
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

  const handleCollapsedTask = useCallback(() => {
    const collapsedTasks = {};
    const id = getId();

    markTasksId.forEach(item => {
      const value = tasks[item].value;
      const id = tasks[item].id;
      const collapsedTask =  Object.assign({}, {value}, {id})

      return collapsedTasks[item] = collapsedTask;
    });

    dispatch(addTask({id, timeCreation: Date.now(), status: TODO, timeChange: Date.now(), subtasks: collapsedTasks, }));
    dispatch(setSelectTask({[id]: false}));

    markTasksId.forEach((id) => {
      dispatch(deleteTask(id));
      dispatch(setSelectTask({[id]: false}));
    })
  }, [dispatch, markTasksId, tasks]);

  if(!isVisebled) {
    return null;
  }

  return (
    <div className={`${s.tasksEditor} ${isChangePosition} ${tasksEditor__stretch}`} >
      <span className={s.tasksEditor__name}>Tasks manager</span>
      <div className={s.tasksEditor__panel}>
        <Button color={WARNING} onClick={handleRejectedTask} >
          <Icon type={REJECTED} />
        </Button>
        <Button color={INFO} onClick={handleTodoTask} >
          <Icon type={IN_PROGRESS} />
        </Button>
        <Button color={SUCCESS} onClick={handleCompletedTask} >
          <Icon type={COMPLETED} />
        </Button>
        <Button color={PRIMARY} onClick={handleCollapsedTask} >
          <Icon type='collapsed' />
        </Button>
      </div>
    </div>
  );
};
