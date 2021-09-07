import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  height: 36px;
  min-width: 300px;

  padding-left: 8px;
  margin-right: 10px;
  margin-bottom: 10px;

  resize: none;
  
  &:disabled {
    background-color: var(--white);
    color: var(--main-blue)
  }
`;

export const TextArea = ({ value, disabled, ...props }) => {

  return (
    <StyledTextarea
      value={value}
      disabled={disabled}
      {...props}
    />
  );
};
