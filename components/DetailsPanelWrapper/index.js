import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;

  @media ${({ theme }) => theme.mediaQueries.smaller} {
    padding: 1.5rem 1.5rem;
  }
`;

const DetailsPanelWrapper = ({ children }) => (
  <>
    <Container>{children}</Container>
  </>
);

export default DetailsPanelWrapper;
