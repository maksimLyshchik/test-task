import React from 'react';
import s from './TextArea.module.css';

export const TextArea = ({value, disabled, ...props}) => {

  return (
    <textarea
      className={s.textArea}
      value={value}
      disabled={disabled}
      {...props}
    />
  );
};
