import styled from 'styled-components';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import { rootColors } from '../../../common/constants/constantsRootColors/constantsRootColors';

const taskBorderColor = {
  [COMPLETED]: rootColors.greenComplete,
  [REJECTED]: rootColors.redDelete,
  [IN_PROGRESS]: rootColors.yellowInfo,
  [TODO]: rootColors.blueDull,
};

const taskBGColor = {
  [COMPLETED]: rootColors.lightGreenComplete,
  [REJECTED]: rootColors.lightRedDelete,
  [IN_PROGRESS]: rootColors.lightYellowInfo,
  [TODO]: rootColors.white,
};

export const StyledWrapperTask = styled.div`
  margin-bottom: 12px;
  border: 2px solid ${({status}) =>
           status ?
                  taskBorderColor[status] :
                  rootColors.blueDull
  };
  border-radius: 8px;
  padding: 10px;

  color: ${rootColors['mainBlue']};
  background-color: ${({status}) =>
          status ?
                  taskBGColor[status] :
                  rootColors.white
  };
`;

export const StyledTaskMainBlock = styled.div`
  display: flex;
`;
