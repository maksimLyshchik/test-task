import s from './Button.module.css';
import { useMemo } from 'react';

const buttonType = {
  disabled: s.button_disable,
  primary: s.button_primary,
};

export const Button = ({type = 'primary', ...props}) => {
  const isDisabled = type === 'disabled';
  const composeStyle = useMemo(() => [s.button, buttonType[type]].join(' '), [type]);

  return (
    <button className={composeStyle} disabled={isDisabled} {...props}>{props.children}</button>
  );
};