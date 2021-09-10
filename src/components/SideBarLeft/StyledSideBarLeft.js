import styled from 'styled-components';
import { Button } from '../../common/modules/Button/Button';
import { rootColors } from '../../common/constants/constantsRootColors/constantsRootColors';

export const StyledWrapperSideBar = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: ${props => props.isVisibled ? '0' : '-264px'};
  top: 0;
  z-index: 10;

  min-height: 100vh;
  min-width: 240px;
  border: 2px solid ${rootColors.mainBlue};
  border-radius: 12px;
  padding: 10px;

  transition: left 0.8s;
`;

export const StyledSideBarButton = styled(Button)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 240px;
  top: 60px;

  height: 50px;
  width: 72px;
  border: 2px solid ${rootColors.mainBlue};
  border-radius: 8px;

  color: ${rootColors.mainBlue};
  background-color: ${rootColors.lightBlue};

  transform: rotate(-90deg);

  &:hover {
    background-color: ${rootColors.mainBlue};
    color: ${rootColors.white};
  }
`;
