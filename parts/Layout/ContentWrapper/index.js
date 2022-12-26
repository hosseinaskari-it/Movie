import Styled from "styled-components";

const Containerwrapper = Styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media ${props => (props.theme.mediaQueries.larger)} {
    padding-top: 72px;
    padding-bottom: 6rem;
  }
`;

const ContentWrapper = ({ children }) => {
  return (
    <>
      <Containerwrapper>{children}</Containerwrapper>
    </>
  );
};

export default ContentWrapper;
