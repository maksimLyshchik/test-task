import styled from 'styled-components';

const StyledInput = styled.input`
  min-height: 36px;
  min-width: 300px;

  padding-left: 8px;
  
  &:disabled {
    background-color: var(--gray-disable);
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
