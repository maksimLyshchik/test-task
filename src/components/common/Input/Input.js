import s from './Input.module.css';

export const Input = (props) => {
  return (
    <input className={s.input} {...props}/>
  );
};