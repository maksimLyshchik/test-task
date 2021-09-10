import styled from 'styled-components';
import { rootColors } from '../../../common/constants/constantsRootColors/constantsRootColors';

export const StyledSearchTasks = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid ${rootColors.lightBlue};
  box-shadow: 0 1px 6px 0 ${rootColors.lightBlue};
  border-radius: 20px;

  width: 220px;
  padding-left: 10px;
  margin-bottom: 10px;
`;
