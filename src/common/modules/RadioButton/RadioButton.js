import React from 'react';
import {
  INFO,
  PRIMARY,
  SUCCESS,
  WARNING,
} from '../../constants/constantsColorButton/constantsColorButton';
import styled from 'styled-components';
import { RootColors } from '../../constants/constantsRootColors/constantsRootColors';

const radioButtonColors = {
  [PRIMARY]: 'mainBlue',
  [WARNING]: 'redDelete',
  [SUCCESS]: 'greenComplete',
  [INFO]: 'yellowInfo',
};

const StyledRadioButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  color: ${RootColors['mainBlue']};
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
  
  color: ${props => RootColors[radioButtonColors[props.id]] || RootColors['mainBlue']};
  
  &:checked {
    background-color: ${props => RootColors[radioButtonColors[props.id]] || RootColors['mainBlue']};
    border: 2px solid;

    cursor: default;
  }  
  
  &:checked + ${StyledLabel} {
    border: 2px solid ${props => RootColors[radioButtonColors[props.id]] || RootColors['mainBlue']};
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
