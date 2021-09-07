import React from 'react';
import {
  INFO,
  PRIMARY,
  SUCCESS,
  WARNING,
} from '../../constants/constantsColorButton/constantsColorButton';
import styled from 'styled-components';

const radioButtonColors = {
  [PRIMARY]: 'var(--main-blue)',
  [WARNING]: 'var(--red-delete)',
  [SUCCESS]: 'var(--green-complete)',
  [INFO]: 'var(--yellow-info)',
};

const StyledRadioButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  color: var(--main-blue);
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;

  margin-right: 6px;
  padding: 4px;

  text-transform: uppercase;

  cursor: pointer;
`;

const StyledInput = styled.input`
  appearance: none;

  border-radius: 50%;
  height: 16px;
  width: 16px;

  border: 2px solid;
  margin-right: 10px;

  cursor: pointer;
  
  color: ${props => radioButtonColors[props.id] || 'var(--main-blue)'};
  
  &:checked {
    background-color: ${props => radioButtonColors[props.id] || 'var(--main-blue)'};
    border: 2px solid;

    cursor: default;
  }  
  
  &:checked + ${StyledLabel} {
    border: 2px solid ${props => radioButtonColors[props.id] || 'var(--main-blue)'};
    border-radius: 8px;

    cursor: default;
  }
`;

export const RadioButton = ({
  name,
  value,
  onClick,
  children,
  type = PRIMARY,
  id,
  htmlFor,
  ...props
}) => {

  return (
    <StyledRadioButton>
      <StyledInput
        type='radio'
        name={name}
        value={value}
        onClick={onClick}
        id={id}
        {...props}
      />
      <StyledLabel
        htmlFor={htmlFor}
      >
        {children}
      </StyledLabel>
    </StyledRadioButton>
  );
};
