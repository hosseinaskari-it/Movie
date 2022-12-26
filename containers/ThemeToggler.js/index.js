import React from "react";
import styled from "styled-components";
import Toggle from "components/UI/Toggle";

const ButtonSun = styled.button`
  font-size: 2.125rem;
  background: none;
  border: none;
  line-height: 0;
  padding:1rem;
  color: ${({ theme }) => theme.buttontogglefirstchild};
  &:focus {
    outline: none;
  }
`;

const ButtonMoon = styled(ButtonSun)`
  color: ${({ theme }) => theme.buttontogglelastchild};
`;
const Container = styled.div`
  display: flex;
`;
const ThemeToggler = (props) => {
  const { themeToggler } = props;
  return (
    <Container>
      <ButtonSun onClick={themeToggler} type="button">
        ☀
      </ButtonSun>
      <Toggle themeToggler = {themeToggler}  />
      <ButtonMoon onClick={themeToggler} type="button">
        ☾
      </ButtonMoon>
    </Container>
  );
};

export default ThemeToggler;
