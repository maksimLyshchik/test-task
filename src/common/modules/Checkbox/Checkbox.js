import React from 'react';
import s from './Checkbox.module.css';

export const Checkbox = (props) => {

  return (
    <label className={s.checkbox_primary} >
      <input className={s.hidden_checkbox} {...props} type='checkbox' />
      <span className={s.checkmark} />
    </label>
  );
};
