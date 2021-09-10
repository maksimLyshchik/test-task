import styled from 'styled-components';
import { RootColors } from '../../constants/constantsRootColors/constantsRootColors';
import { OUTLINE } from '../../constants/constantTypeInput/constantTypeInput';
import { useDispatch, useSelector } from 'react-redux';
import { setInputState } from '../../../store/validator/actionsValidator';
import { selectValidator } from '../../../store/validator/selectorValodator';
import { useCallback } from 'react';

const StyledInput = styled.input`
  min-height: 36px;
  min-width: 300px;

  padding-left: 8px;

  ${props => props.type === OUTLINE && `
    border: none;
    min-width: 120px;
    background: transparent;
    
    &:focus {
      outline: 0;
      outline-offset: 0;
    }
  `};

  &:disabled {
    background-color: ${RootColors['grayDisable']};
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0 0;
`;

const StyledMessageError = styled.span`
  color: ${RootColors['redDelete']}
`;

export const Input = ({ validation, ...props }) => {
  const dispatch = useDispatch();
  const validator = useSelector(selectValidator);
  const errorInput = validator[props.id]?.error;

  const handleChangeInput = useCallback(({ target }) => {
    const { id, value } = target;

    dispatch(setInputState({ id, value, valid: true, error: false }));
  }, []);

  const handleChangeValidation = useCallback(({ target }) => {
    const { id, value } = target;

    if (typeof validation === 'function') {
      dispatch(validation(id, value));
    }
  }, []);

  return (
    <StyledLabel onChange={handleChangeInput}>
      <StyledInput onBlur={handleChangeValidation} {...props} />
      {validation && errorInput && <StyledMessageError>Please fill out this field</StyledMessageError>}
    </StyledLabel>
  );
};
