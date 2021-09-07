import styled from 'styled-components';
import {
  INFO,
  OUTLINE,
  PRIMARY,
  SUCCESS,
  WARNING
} from '../../constants/constantsColorButton/constantsColorButton';

const buttonColors = {
  [PRIMARY]: 'var(--main-blue)',
  [WARNING]: 'var(--red-delete)',
  [SUCCESS]: 'var(--green-complete)',
  [INFO]: 'var(--yellow-info)',
  [OUTLINE]: 'var(--light-blue)',
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid var(--white-gray-tint);
  min-width: 100px;
  min-height: 40px;

  text-transform: uppercase;
  background-color: ${props => buttonColors[props.color] || 'var(--main-blue)'};
  color: var(--white);

  cursor: pointer;

  &:disabled {
    background-color: var(--gray-disable);

    cursor: not-allowed;
  };
  
  ${props => props.color === OUTLINE && `
  border: 2px solid var(--main-blue);
  min-width: 40px;
  background-color: var(--light-blue);
  &:hover {
    background-color: var(--main-blue);
  }`
};
`;

export const Button = ({ ...props }) => {

  return (
    <StyledButton {...props} >{props.children} </StyledButton>
  );
};
