import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  user-select: none;
 

  @media ${props => (props.theme.mediaQueries.large)} {
    flex-direction: column;
  }
`;

const MainWrapper = ({ children }) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default MainWrapper;
