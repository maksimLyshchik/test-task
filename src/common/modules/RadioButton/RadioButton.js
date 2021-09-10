import React from 'react';
import {
  INFO,
  PRIMARY,
  SUCCESS,
  WARNING,
} from '../../constants/constantsColorButton/constantsColorButton';
import styled from 'styled-components';
import { rootColors } from '../../constants/constantsRootColors/constantsRootColors';

const radioButtonColors = {
  [PRIMARY]: rootColors.mainBlue,
  [WARNING]: rootColors.redDelete,
  [SUCCESS]: rootColors.greenComplete,
  [INFO]: rootColors.yellowInfo,
};

const StyledRadioButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;

  color: ${rootColors.mainBlue};
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

  color: ${({ color }) => radioButtonColors[color] || rootColors.mainBlue};

  &:checked {
    background-color: ${({ color }) => radioButtonColors[color] || rootColors.mainBlue};
    border: 2px solid;

    cursor: default;
  }

  &:checked + ${StyledLabel} {
    border: 2px solid ${({ color }) => radioButtonColors[color] || rootColors.mainBlue};
    border-radius: 8px;

    cursor: default;
  }
`;

export const RadioButton = ({
  name,
  value,
  onClick,
  children,
  type,
  color = PRIMARY,
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
        color={color}
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
