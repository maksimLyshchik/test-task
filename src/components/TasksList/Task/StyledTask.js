import styled from 'styled-components';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import { RootColors } from '../../../common/constants/constantsRootColors/constantsRootColors';

const taskBorderColor = {
  [COMPLETED]: 'greenComplete',
  [REJECTED]: 'redDelete',
  [IN_PROGRESS]: 'yellowInfo',
  [TODO]: '',
};

const taskBGColor = {
  [COMPLETED]: 'lightGreenComplete',
  [REJECTED]: 'lightRedDelete',
  [IN_PROGRESS]: 'lightYellowInfo',
  [TODO]: '',
};

export const StyledWrapperTask = styled.div`
  margin-bottom: 12px;
  border: 2px solid ${props =>
          props.status !== TODO ?
                  RootColors[taskBorderColor[props.status]] :
                  RootColors['blueDull']};
  border-radius: 8px;
  padding: 10px;

  color: ${RootColors['mainBlue']};
  background-color: ${props =>
          props.status !== TODO ?
                  `${RootColors[`${taskBGColor[props.status]}`]}` :
                  `${RootColors['white']}`};
`;

export const StyledTaskMainBlock = styled.div`
  display: flex;
`;
