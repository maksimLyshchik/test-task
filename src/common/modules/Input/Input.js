import s from './Input.module.css';

const inputType = {
  primary: s.input,
  disabled: s.input_disabled,
  search: s. input_search,
};

export const Input = ({type = 'primary', ...props}) => {

  return (
    <label className={s.label}>
      <input className={`${s.input} ${inputType[type]}`} {...props} />
    </label>
  );
};
