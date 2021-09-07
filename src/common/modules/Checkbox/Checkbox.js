import React from 'react';
import styled from 'styled-components';

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  select: none;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 38px;
  width: 38px;

  background-color: var(--light-blue);
  border: 2px solid var(--main-blue);

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

  &:hover > ${CheckboxInput} ~ ${Checkmark} {
    background-color: var(--light-blue);
  }

  & > ${CheckboxInput}:checked ~ ${Checkmark} {
    display: block;
    background-color: var(--main-blue);
  }

  & > ${Checkmark}::after {
    left: 14px;
    top: 6px;
    width: 8px;
    height: 16px;

    border: solid var(--white);
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }

  & > ${CheckboxInput}:disabled ~ ${Checkmark} {
    background-color: var(--gray-disable);
    border: 2px solid var(--white-gray-tint);

    cursor: not-allowed;
  }
`;


export const Checkbox = (props) => {

  return (
    <StyledCheckbox>
      <CheckboxInput {...props} type='checkbox' />
      <Checkmark />
    </StyledCheckbox>
  );
};
