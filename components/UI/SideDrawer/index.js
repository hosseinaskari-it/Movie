import Backdrop from "../Backdrop";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 250px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.drawer};
  padding: 32px 16px;
  overflow-y: auto;
  box-sizing: border-box;
  transition: transform ${({ theme }) => theme.transitions.duration.short}ms
    ${({ theme }) => theme.transitions.easing.easeOut};
  box-shadow: ${({ theme }) => theme.shadows[16]};
  background-color: ${({ theme }) => theme.palettebackgroundpaper};
  transform: ${(props) =>
    props.opened ? "translateX(0)" : "translateX(-100%)"};
`;

const SideDrawer = ({ opened, close, children }) => (
  <>
    <Backdrop opened={opened} onClick={close} />
    <Container opened={opened}>{children}</Container>
  </>
);

export default SideDrawer;
