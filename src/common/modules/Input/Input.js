import styled from 'styled-components';
import { RootColors } from '../../constants/constantsRootColors/constantsRootColors';
import { OUTLINE } from '../../constants/constantTypeInput/constantTypeInput';
import { useDispatch } from 'react-redux';
import { setInputState } from '../../../store/InputsState/actionsInputs';

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

export const Input = ({ validation, required, id, value, ...props }) => {
  const dispatch = useDispatch();

  const handleChangeInput = ({ target }) => {
    const { id, value, validationMessage } = target;
    dispatch(setInputState({ id, value, validationMessage }));
  };

  return (
    <StyledLabel onChange={handleChangeInput}>
      <StyledInput onBlur={validation(id, value)} {...props} />
      { && <StyledMessageError>Please fill out this field</StyledMessageError>}
    </StyledLabel>
  );
};
