import styled from 'styled-components';
import { RootColors } from '../../constants/constantsRootColors/constantsRootColors';

const StyledInput = styled.input`
  min-height: 36px;
  min-width: 300px;

  padding-left: 8px;

  &:required:invalid {
    border: 2px solid ${RootColors['redDelete']};    
  }
      
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
