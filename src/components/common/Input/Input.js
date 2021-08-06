import s from './Input.module.css';

export const Input = (props) => {
  return (
    <label className={s.label_style}>
      <input className={s.input_style} {...props}/>
    </label>
  );
};
