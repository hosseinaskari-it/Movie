import styled from "styled-components";

const Container = styled.span`
  visibility: hidden;
  width: 120px;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};

  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.paletteprimarylight};

  color: ${({ theme }) => theme.paletteprimarycontrasttext};

  text-align: center;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  padding: 1rem;
  z-index: ${({ theme }) => theme.zIndex.tooltip};

  transition: visibility ${({ theme }) => theme.transitions.duration.shorter}ms
    ${({ theme }) => theme.transitions.easing.easeInOut};

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.paletteprimarylight} transparent
      transparent transparent;
  }
`;

const Tooltip = ({ children, ...rest }) => (
  <>
    <Container {...rest}>{children}</Container>
  </>
);

export default Tooltip;
