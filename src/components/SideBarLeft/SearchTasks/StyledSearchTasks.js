import styled from 'styled-components';
import { RootColors } from '../../../common/constants/constantsRootColors/constantsRootColors';

export const StyledSearchTasks = styled.div`
  display: flex;
  align-items: center;

  border: 2px solid ${RootColors['lightBlue']};
  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 30%);
  border-radius: 20px;

  width: 220px;
  padding-left: 10px;
  margin-bottom: 10px;
`;
