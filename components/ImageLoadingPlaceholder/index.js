import LoadingSpinner from "components/UI/LoadingSpinner";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

const ImageLoadingPlaceholder = () => (
  <>
    <Container>
      <LoadingSpinner />
    </Container>
  </>
);

export default ImageLoadingPlaceholder;
