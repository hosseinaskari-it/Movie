import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  grid-gap: 4rem 2rem;
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  margin: 4rem 0;
  @media ${({ theme }) => theme.mediaQueries.small} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
    justify-content: space-around;
    grid-gap: 4rem 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
    grid-gap: 4rem 1rem;
  }
`;

const MoviesGridContainer = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
);

export default MoviesGridContainer;
