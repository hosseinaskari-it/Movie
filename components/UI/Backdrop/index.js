import styled from "styled-components";

const Container = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.appBar + 1};
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.palettebackgroundbackdrop};

  -webkit-tap-highlight-color: transparent;
  transition: opacity
    ${({ theme }) => theme.transitions.duration.leavingScreen}ms
    ${({ theme }) => theme.transitions.easing.easeInOut} 0ms;

  .opened {
    visibility: visible;
    opacity: 1;
  }
`;

const Backdrop = ({ ...rest }) => (
  <>
    <Container className="opened" {...rest} />
  </>
);

export default Backdrop;
