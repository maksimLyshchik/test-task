import React from 'react';
import s from './TaskContent.module.css';

export const TaskContent = ({content}) => {

  return (
    <div className={s.taskContent} >
      {content}
    </div>
  );
};
