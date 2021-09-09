import styled from 'styled-components';
import { RootColors } from '../../constants/constantsRootColors/constantsRootColors';
import { OUTLINE } from '../../constants/constantTypeInput/constantTypeInput';

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
  margin: 0 10px 0 0;
`;

export const Input = ({ ...props }) => {

  return (
    <StyledLabel>
      <StyledInput {...props} />
    </StyledLabel>
  );
};
