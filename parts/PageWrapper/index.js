import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const PageWrapper = ({ children, ...rest }) => (
  <>
    <Container {...rest}>{children}</Container>
  </>
);

export default PageWrapper;
