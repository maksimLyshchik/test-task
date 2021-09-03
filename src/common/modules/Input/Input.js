import s from './Input.module.css';

const inputType = {
  primary: s.input,
  disabled: s.input_disabled,
  search: s. input_search,
};

export const Input = ({type = 'primary', value, ...props}) => {

  return (
    <label className={s.label}>
      <input className={`${s.input} ${inputType[type]}`} value={value} {...props} />
    </label>
  );
};
