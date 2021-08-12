import React from 'react';
import s from './RadioButton.module.css';

export const RadioButton = ({...props}) => {

  return (
    <div className={s.radioButton} >
      <input className={s.radioButton__input} type='radio' name={props.name} value={props.value} onClick={props.onClick} />
      <label className={s.radioButton__label} >
        {props.children}
      </label>
    </div>
  );
};
