import React, { useCallback, useMemo } from 'react';
import { Button } from '../../common/modules/Button/Button';
import { INFO, SUCCESS, WARNING } from '../../common/constants/constantsColorButton/constantsColorButton';
import { Icon } from '../../common/modules/Icons/Icons';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../common/constants/constantsTasks/constantsTasks';
import { completedTask, rejectedTask, todoTask } from '../../store/tasks/actionsTasks';
import { useDispatch, useSelector } from 'react-redux';
import { selectCheckedTask, selectMarkedTask } from '../../store/selectedEntity/selectorSelects';
import { setSelectTask } from '../../store/selectedEntity/actionsSelects';
import s from './EditTasks.module.css';

export const EditorTasks = () => {
  const dispatch = useDispatch();
  const markTasksId = useSelector(selectMarkedTask);
  const selectedTasks = useSelector(selectCheckedTask);

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

  const handleEditorPosition = useMemo(() => {
    const editorPosition = Object.values(selectedTasks).filter(item => item).length;

    return editorPosition ? s.expanded : s.collapsed;
  }, [selectedTasks]);

  return (
    <div className={`${s.tasksEditor} ${handleEditorPosition}`} >
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
      </div>
    </div>
  );
};
