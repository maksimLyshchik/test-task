import s from './Button.module.css';

const buttonType = {
  disabled: s.button_disable,
  primary: s.button_primary,
};

export const Button = ({type = 'primary', ...props}) => {
  const isDisabled = type === 'disabled';

  return (
    <button className={`${s.button} ${buttonType[type]}`} disabled={isDisabled} {...props}>{props.children}</button>
  );
};
