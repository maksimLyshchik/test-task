import s from './Input.module.css';

const inputType = {
  primary: s.input,
  disabled: s.input_disabled,
};

export const Input = ({type = 'primary', ...props}) => {
  const isDisabled = type === 'disabled';

  return (
    <label className={s.label}>
      <input className={`${s.input} ${inputType[type]}`} disabled={isDisabled} {...props}/>
    </label>
  );
};
