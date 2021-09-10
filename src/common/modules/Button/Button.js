import styled from 'styled-components';
import {
  INFO,
  OUTLINE,
  PRIMARY,
  SUCCESS,
  WARNING,
} from '../../constants/constantsColorButton/constantsColorButton';
import { rootColors } from '../../constants/constantsRootColors/constantsRootColors';

const buttonColors = {
  [PRIMARY]: rootColors.mainBlue,
  [WARNING]: rootColors.redDelete,
  [SUCCESS]: rootColors.greenComplete,
  [INFO]: rootColors.yellowInfo,
  [OUTLINE]: rootColors.lightBlue,
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid ${rootColors.whiteGrayTint};
  min-width: 100px;
  min-height: 40px;

  text-transform: uppercase;
  background-color: ${({ color }) => buttonColors[color] || rootColors.mainBlue};
  color: ${rootColors.white};

  cursor: pointer;

  &:disabled {
    background-color: ${rootColors.grayDisable};

    cursor: not-allowed;
  };

  ${props => props.color === OUTLINE && `
      border: 2px solid ${rootColors.mainBlue};
      min-width: 40px;
      background-color: ${rootColors.lightBlue};
    &:hover {
      background-color: ${rootColors.mainBlue};
    }`
  };
`;

export const Button = ({ ...props }) => {

  return (
    <StyledButton {...props} >{props.children} </StyledButton>
  );
};
