import React from 'react';
import { PRIMARY } from '../../constants/constantsColorButton/constantsColorButton';
import s from './RadioButton.module.css';

const radioButtonColors = {
  primary: s.radioButton_primary,
  warning: s.radioButton_warning,
  success: s.radioButton_success,
  info: s.radioButton_info,
};

export const RadioButton = ({name, value, onClick, children, type = PRIMARY, id,  ...props}) => {

  return (
    <div className={s.radioButton} >
      <input
        className={`${s.radioButton__input}
        ${radioButtonColors[type]}`}
        type='radio'
        name={name}
        value={value}
        onClick={onClick}
        id={id}
        {...props}
      />
      <label
        className={`${s.radioButton__label} ${radioButtonColors[type]}`}
        for={props.for}
      >
        {children}
      </label>
    </div>
  );
};
