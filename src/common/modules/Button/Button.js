import { PRIMARY } from '../../constants/constantsColorButton/constantsColorButton';
import s from './Button.module.css';

const buttonColors = {
  primary: s.button_primary,
  warning: s.button_warning,
  success: s.button_success,
  info: s.button_info,
  transparent: s.button_transparent,
};

export const Button = ({color = PRIMARY, ...props}) => {

  return (
    <button className={`${s.button} ${buttonColors[color]}`} {...props} >{props.children} </button>
  );
};
