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
  splitTask,
  todoTask
} from '../../store/tasks/actionsTasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedTask, selectMarkedTask } from '../../store/selectedEntity/selectorSelects';
import { deleteSelectTask, setSelectTask } from '../../store/selectedEntity/actionsSelects';
import { selectObjectTasks } from '../../store/tasks/selectorTasks';
import { getId } from '../../helpers/getUniqId';
import s from './EditTasks.module.css';

export const EditorTasks = () => {
  const dispatch = useDispatch();
  const markTasksId = useSelector(selectMarkedTask);
  const selectedTasks = useSelector(selectCheckedTask);
  const tasks = useSelector(selectObjectTasks);
  const isVisebled = Object.values(selectedTasks).filter(item => item).length;

  const handleRejectedTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(rejectedTask(id));
      dispatch(setSelectTask({ [id]: false }));
    });
  }, [dispatch, markTasksId]);

  const handleCompletedTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(completedTask(id));
      dispatch(setSelectTask({ [id]: false }));
    });
  }, [dispatch, markTasksId]);

  const handleTodoTask = useCallback(() => {
    markTasksId.forEach((id) => {
      dispatch(todoTask(id));
      dispatch(setSelectTask({ [id]: false }));
    });
  }, [dispatch, markTasksId]);

  const handleEditorPosition = useMemo(() => isVisebled && s.collapsed, [isVisebled]);

  const handleCollapsedTask = useCallback(() => {
    let subtasks = {};
    const id = getId();

    const markTasks = Object.values(tasks).filter(task => markTasksId.includes(task.id));

    markTasks.forEach(task => {
      if (task.subtasks) {
        subtasks = {
          ...subtasks,
          ...task.subtasks,
        };
        return;
      }
      subtasks = {
        ...subtasks,
        [task.id]: {
          value: task.value,
          id: task.id,
        }
      };
    });

    dispatch(addTask({
      id,
      time: Date.now(),
      status: TODO,
      timeChange: Date.now(),
      subtasks,
    }));
    dispatch(setSelectTask({ [id]: false }));

    markTasksId.forEach((id) => {
      dispatch(deleteTask(id));
      dispatch(setSelectTask({ [id]: false }));
    });
  }, [dispatch, markTasksId, tasks]);

  const handleSplitTask = () => {
    markTasksId.forEach(item => {

      if (tasks[item].subtasks) {
        Object.values(tasks[item].subtasks).forEach((subtask) => {
          const restoredTask = {
            ...subtask,
            time: tasks[item].time,
            status: tasks[item].status,
            timeChange: tasks[item].timeChange,
          };

          dispatch(splitTask({ ...restoredTask }));
          dispatch(deleteTask(item));
          dispatch(deleteSelectTask(item));
        });
      } else {
        dispatch(setSelectTask({ [item]: false }));
      }
    });
  };

  const isDisabled = useMemo(() => {
    return markTasksId.filter(id => tasks[id].subtasks).length !== markTasksId.length;
  }, [tasks, markTasksId]);

  if (!isVisebled) {
    return null;
  }

  return (
    <div className={`${s.tasksEditor} ${handleEditorPosition}`}>
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
        <Button color={PRIMARY} onClick={handleCollapsedTask} disabled={!isDisabled}>
          <Icon type='collapsed' />
        </Button>
        <Button color={PRIMARY} onClick={handleSplitTask} disabled={isDisabled}>
          <Icon type='breakUp' />
        </Button>
      </div>
    </div>
  );
};
