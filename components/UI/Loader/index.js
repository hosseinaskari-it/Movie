import styled from "styled-components";
const LoadingMain = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.paletteprimarydark};

  box-shadow: -5rem 0rem 0rem ${({ theme }) => theme.paletteprimarymain};

  animation: circle-classic 1s ease-in-out infinite alternate;
  @keyframes circle-classic {
    0% {
      opacity: 0.1;
      transform: rotate(0deg) scale(0.5);
    }
    100% {
      opacity: 1;
      transform: rotate(360deg) scale(1.2);
    }
  }
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  min-width: 150px;
  min-height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
const Loading = () => (
  <>
    <LoadingMain className="loading" />
  </>
);

const Loader = () => (
  <>
    <Container>
      <Loading />
    </Container>
  </>
);

export default Loader;
