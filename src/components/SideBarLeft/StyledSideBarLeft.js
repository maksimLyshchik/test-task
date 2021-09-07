import styled from 'styled-components';
import { Button } from '../../common/modules/Button/Button';

export const WrapperSideBar = styled.div`
  display: flex;
  flex-direction: column;

  position: fixed;
  left: ${props => props.isVisibled ? '0' : '-180px'};
  top: 0;
  z-index: 3;

  min-height: 100vh;
  min-width: 180px;

  transition: left 0.8s;
`;

export const SideBarButton = styled(Button)`
  flex-direction: column;

  position: absolute;
  left: 160px;
  top: 60px;

  height: 50px;
  width: 72px;
  border: 2px solid var(--main-blue);
  border-radius: 8px;

  color: var(--main-blue);
  background-color: var(--light-blue);

  transform: rotate(-90deg);

  &:hover {
    background-color: var(--main-blue);
    color: var(--white);
  }
`;
