import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectTask } from '../../../store/selectedEntity/actionsSelects';
import { Checkbox } from '../../../common/modules/Checkbox/Checkbox';
import { COMPLETED, REJECTED } from '../../../common/constants/constantsTasks/constantsTasks';
import { TaskActions } from './TaskActions/TaskActions';
import { selectCheckedTask } from '../../../store/selectedEntity/selectorSelects';
import { TaskContent } from './TaskContent/TaskContent';
import { TextArea } from '../../../common/modules/TextArea/TextArea';
import { BlockWithTime } from './BlockWithTime/BlockWithTime';
import s from './Task.module.css';

const taskClass = {
  primary: s.task,
  completed: s.completed,
  rejected: s.rejected,
  in_progress: s.inProgress,
  todo: '',
};

export const Task = ({task}) => {
  const dispatch = useDispatch();
  const isMultiplayTask = !!task?.subtasks;
  const {value, id, status, timeCreation, timeChange} = task;
  const selectedTasks = useSelector(selectCheckedTask);
  const isRejectedTask = status === REJECTED;
  const isSuccessTask = status === COMPLETED;

  const handleChangeSelect = useCallback(({target}) => {
    const {checked} = target;
    dispatch(setSelectTask({[id]: checked}));
  }, [dispatch, id]);

  const content = useMemo(() => {
    if (isMultiplayTask) {
      return Object.values(task.subtasks).map(item => <TextArea key={item.id} value={item.value} />);
    }

    return <TextArea value={value} />;
  }, [isMultiplayTask, task, value]);

  return (
    <div className={`${s.task} ${taskClass[status]}`} >
      <div className={s.blockTask__main}>
        <Checkbox
          onChange={handleChangeSelect}
          checked={selectedTasks[id]}
          disabled={isRejectedTask || isSuccessTask}
        />
        <TaskContent content={content} />
        <TaskActions id={id} status={status} />
      </div>
      <BlockWithTime
        timeCreation={timeCreation}
        timeChange={timeChange}
        status={status}
      />
    </div>
  );
};
