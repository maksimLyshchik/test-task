import s from './Button.module.css';

const buttonColors = {
  primary: s.button_primary,
  warning: s.button_warning,
  success: s.button_success,
  info: s.button_info,
};

export const Button = ({color = 'primary', ...props}) => {

  return (
    <button className={`${s.button} ${buttonColors[color]}`} {...props} >{props.children} </button>
  );
};
