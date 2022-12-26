import styled from "styled-components";

const Bar = styled.span`
  width: 100%;
  height: 4px;
  margin: 2px 0;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background-color: ${({ theme }) => theme.palettesecondarymain};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 25px;
  line-height: 1;
  cursor: pointer;
`;

const HamburgerButton = (props) => (
  <>
    <Container {...props}>
      <Bar />
      <Bar />
      <Bar />
    </Container>
  </>
);

export default HamburgerButton;
