import styled from 'styled-components';

const buttonColors = {
  primary: 'var(--main-blue)',
  warning: 'var(--red-delete)',
  success: 'var(--green-complete)',
  info: 'var(--yelow-info)',
  outline: 'var(--light-blue)',
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid var(--white-gray-tint);
  min-width: 100px;
  min-height: 40px;

  text-transform: uppercase;
  background-color: ${props => buttonColors[props.color] || 'var(--main-blue)'};
  color: var(--white);

  cursor: pointer;

  &:disabled {
    background-color: var(--gray-disable);

    cursor: not-allowed;
  }
`;

export const Button = ({ ...props }) => {

  return (
    <StyledButton {...props} >{props.children} </StyledButton>
  );
};
