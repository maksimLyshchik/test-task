import styled from 'styled-components';
import { RootColors } from '../../../common/constants/constantsRootColors/constantsRootColors';

export const StyledWrapperTaskFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1 1 100%;
  
  border-radius: 8px;
  padding: 8px;

  color: ${RootColors['mainBlue']};
  background-color: ${RootColors['white']};

  min-width: 90%;

  font-size: 0.8em;
`;
