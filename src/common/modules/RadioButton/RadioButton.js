import React from 'react';
import s from './RadioButton.module.css';

export const RadioButton = (props) => {

  return (
    <div className={s.radioButton}>
      <label className={s.radioButton__label}>
        <input className={s.radioButton__input} type='radio'/>
        {props.children}
      </label>
    </div>
  );
};
