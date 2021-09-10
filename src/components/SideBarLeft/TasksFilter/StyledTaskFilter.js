import styled from 'styled-components';
import { rootColors } from '../../../common/constants/constantsRootColors/constantsRootColors';

export const StyledWrapperTaskFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1 1 100%;
  
  border-radius: 8px;
  padding: 8px;

  color: ${rootColors.mainBlue};
  background-color: ${rootColors.white};

  min-width: 90%;

  font-size: 0.8em;
`;
