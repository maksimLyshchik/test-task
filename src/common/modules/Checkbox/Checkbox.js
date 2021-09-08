import React from 'react';
import styled from 'styled-components';
import { RootColors } from '../../constants/constantsRootColors/constantsRootColors';

const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  select: none;
`;

const StyledCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 38px;
  width: 38px;

  background-color: ${RootColors['lightBlue']};
  border: 2px solid ${RootColors['mainBlue']};

  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 48px;
  margin-bottom: 20px;

  cursor: pointer;

  font-size: 22px;

  &:hover > ${StyledCheckboxInput} ~ ${StyledCheckmark} {
    background-color: ${RootColors['lightBlue']};
  }

  & > ${StyledCheckboxInput}:checked ~ ${StyledCheckmark} {
    display: block;
    background-color: ${RootColors['mainBlue']};
  }

  & > ${StyledCheckmark}::after {
    left: 14px;
    top: 6px;
    width: 8px;
    height: 16px;

    border: solid ${RootColors['white']};
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }

  & > ${StyledCheckboxInput}:disabled ~ ${StyledCheckmark} {
    background-color: ${RootColors['grayDisable']};
    border: 2px solid ${RootColors['whiteGrayTint']};

    cursor: not-allowed;
  }
`;


export const Checkbox = (props) => {

  return (
    <StyledCheckbox>
      <StyledCheckboxInput {...props} type='checkbox' />
      <StyledCheckmark />
    </StyledCheckbox>
  );
};
