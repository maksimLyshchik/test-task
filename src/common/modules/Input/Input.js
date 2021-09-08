import { DISABLED, OUTLINE, PRIMARY, WARNING } from '../../constants/constantTypeInput/constantTypeInput';
import s from './Input.module.css';

const inputType = {
  [PRIMARY]: s.input,
  [DISABLED]: s.input_disabled,
  [OUTLINE]: s.input_outline,
  [WARNING]: s.input_warning,
};

export const Input = ({type = 'primary', ...props}) => {

  return (
    <label className={s.label}>
      <input className={`${s.input} ${inputType[type]}`} {...props} />
    </label>
  );
};
