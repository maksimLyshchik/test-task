import React, { useMemo } from 'react';
import { TextArea } from '../../../../common/modules/TextArea/TextArea';
import s from './TaskContent.module.css';

export const TaskContent = ({task, value, isMultiplayTask}) => {
  const content = useMemo(() => {
    if (isMultiplayTask) {
      return Object.values(task.subtasks).map(item => <TextArea key={item.id} value={item.value}/>);
    }

    return <TextArea value={value}/>;
  }, [isMultiplayTask, task, value]);

  return (
    <div className={s.taskContent} >
      {content}
    </div>
  );
};
