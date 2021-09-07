import styled from 'styled-components';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../../common/constants/constantsTasks/constantsTasks';

const taskClass = {
  [COMPLETED]: 'green-complete',
  [REJECTED]: 'red-delete',
  [IN_PROGRESS]: 'yellow-info',
  [TODO]: '',
};

export const WrapperTask = styled.div`
  margin-bottom: 12px;
  border: 2px solid ${props =>
                    props.status !== TODO ?
                    `var(--${taskClass[props.status]})` :
                    `var(--blue-dull)`};;
  border-radius: 8px;
  padding: 10px;

  color: var(--main-blue);
  background-color: ${props =>
                    props.status !== TODO ? 
                    `var(--light-${taskClass[props.status]})` : 
                    `var(--white)`};
`;

export const TaskMainBlock = styled.div`
  display: flex;
`;
