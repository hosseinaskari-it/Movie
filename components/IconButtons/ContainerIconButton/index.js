import { Buttonbase } from "components/UI/Buttonbase/Buttonbase";
import styled from "styled-components";

const IconButtonBase = styled.div``;

const ButtonExit = styled(Buttonbase)`
  &:hover {
    background-color: rgba(
      ${({ theme }) => theme.palettesecondarymainrgb},
      ${({ theme }) => theme.paletteactionhoveropacity}
    );
    border-radius: 50%;
  }
`;

const ContainerIconButton = (props) => (
  <>
    <IconButtonBase {...props}>
      <ButtonExit>{props.children}</ButtonExit>
    </IconButtonBase>
  </>
);

export default ContainerIconButton;
