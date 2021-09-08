import styled from 'styled-components';

export const StyledWrapperTaskEditor = styled.div`
  display: flex;

  position: fixed;
  left: ${props => props.isStretch ? '0' : '180px'};
  right: 0;
  bottom: 0;
  z-index: 2;

  visibility: ${props => props.isVisebled ? 'visible' : 'hidden'};
  opacity: 1;
  transform: ${props => props.isVisebled ? 'translate(0px, 0px)' : 'translate(0px, 100%)'};
  transition: all 0.8s;

  border: 2px solid var(--main-blue);
  border-radius: 8px;
  padding: 10px 22px 10px 10px;

  color: var(--main-blue);
  background-color: var(--white);

  animation-duration: 0.6s;
  animation-name: slideFromBottom;
  animation-iteration-count: 1;

  @keyframes slideFromBottom {
    from {
      margin-bottom: -4%;
      width: 100%;
    }

    to {
      margin-bottom: 0;
    }
  }
`;

export const StyledTaskEditorPanel = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 40px;
  min-width: 540px;
`;

export const StyledTaskEditorName = styled.span`
  display: flex;
  align-items: center;

  padding: 10px;

  text-align: center;
  text-transform: uppercase;
  font-size: 1.2em;
`;
