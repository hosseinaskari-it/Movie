import styled from "styled-components";

const Container = styled.div`
  padding-right: 4rem;
  padding-left: 4rem;

  @media ${({ theme }) => theme.mediaQueries.larger} {
    padding-right: 3rem;
    padding-left: 3rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

const PaddingWrapper = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
);

export default PaddingWrapper;
