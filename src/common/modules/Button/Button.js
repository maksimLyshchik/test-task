import styled from 'styled-components';
import {
  INFO,
  OUTLINE,
  PRIMARY,
  SUCCESS,
  WARNING,
} from '../../constants/constantsColorButton/constantsColorButton';
import { RootColors } from '../../constants/constantsRootColors/constantsRootColors';

const buttonColors = {
  [PRIMARY]: 'mainBlue',
  [WARNING]: 'redDelete',
  [SUCCESS]: 'greenComplete',
  [INFO]: 'yellowInfo',
  [OUTLINE]: 'lightBlue',
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid ${RootColors['whiteGrayTint']};
  min-width: 100px;
  height: 44px;

  text-transform: uppercase;
  background-color: ${props => RootColors[buttonColors[props.color]] || RootColors['mainBlue']};
  color: ${RootColors['white']};

  cursor: pointer;

  &:disabled {
    background-color: ${RootColors['grayDisable']};

    cursor: not-allowed;
  }
;

  ${props => props.color === OUTLINE && `
  border: 2px solid ${RootColors['mainBlue']};
  min-width: 40px;
  background-color: ${RootColors['lightBlue']};
  &:hover {
    background-color: ${RootColors['mainBlue']};
  }`
  };
`;

export const Button = ({ ...props }) => {

  return (
    <StyledButton {...props} >{props.children} </StyledButton>
  );
};
