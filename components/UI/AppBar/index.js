import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.appBar};

  box-shadow: ${({ theme }) => theme.shadows[4]};

  background-color: ${({ theme }) => theme.palettebackgroundpaper};

  -webkit-tap-highlight-color: transparent;

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    background-color: transparent;
  }
`;

const Container = styled.div`
  min-height: 64px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries.small} {
    min-height: 56px;
    padding: 0 16px;
  }
`;

const AppBar = ({ children }) => (
  <>
    <Header>
      <Container>{children}</Container>
    </Header>
  </>
);

export default AppBar;
