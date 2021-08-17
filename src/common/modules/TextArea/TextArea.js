import React from 'react';
import s from './TextArea.module.css';

export const TextArea = ({value, ...props}) => {

  return (
    <textarea className={s.textArea} value={value} {...props} />
  );
};
