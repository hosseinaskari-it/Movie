import styled from "styled-components";

const Container = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    background-image: ${({ theme }) => theme.backgroundblendgradient};
  }
`;

const GradientImageWrapper = ({ children, overlayEnabled, ...rest }) => (
  <>
    {overlayEnabled ? (
      <>
        <Container {...rest}>{children}</Container>
      </>
    ) : (
      <>{children}</>
    )}
  </>
);

export default GradientImageWrapper;
