import React from 'react';
import s from './RadioButton.module.css';

export const RadioButton = ({name, value, onClick, children, ...props}) => {

  return (
    <div className={s.radioButton} >
      <label className={s.radioButton__label} >
      <input className={s.radioButton__input} type='radio' name={name} value={value} onClick={onClick} {...props}/>
        {children}
      </label>
    </div>
  );
};
