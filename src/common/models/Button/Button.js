import s from './Button.module.css';

const buttonColors = {
  primary: s.button_primary,
  rejected: s.button_delete,
  completed: s.button_complete,
  todo: s.button_progress,
};

export const Button = ({color = 'primary', ...props}) => {

  return (
    <button className={`${s.button} ${buttonColors[color]}`} {...props} >{props.children} </button>
  );
};
