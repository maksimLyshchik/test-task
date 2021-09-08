import styled from 'styled-components';
import { RootColors } from '../../common/constants/constantsRootColors/constantsRootColors';

export const StyledWrapperTaskList = styled.div`
  padding: 10px 10px 0 10px;
  min-width: 714px;
  border: 2px solid ${RootColors['blueDull']};
  border-radius: 8px;

  background-color: ${RootColors['whiteBlueTint']};
`;

export const StyledTaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 40px;
  padding: 0 12px 12px 12px;
`;

export const StyledHeaderName = styled.span`
  padding: 10px;

  font-size: 1.2em;
  color: ${RootColors['mainBlue']};
  text-transform: uppercase;
`;

export const StyledHeaderBlockCheckbox = styled.div`
  display: flex;
`;

export const StyledInitialText = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px 0;

  color: ${RootColors['mainBlue']};
  text-transform: uppercase;
  font-size: 1.2em;
`;
