import styled from "styled-components";

const ContainerMain = styled.div`
  height: 0;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const AspectRatioBox = ({ children, aspectRatio = 1, ...rest }) => (
  <ContainerMain style={{ paddingTop: `${(1 / aspectRatio) * 100}%` }}>
    <Content {...rest}>{children}</Content>
  </ContainerMain>
);

export default AspectRatioBox;
