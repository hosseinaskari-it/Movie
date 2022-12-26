import AppBar from "components/UI/AppBar";
import HamburgerButton from "components/UI/HamburgerButton";
import SearchBar from "containers/SearchBar";
import ThemeToggler from "containers/ThemeToggler.js";
import TheUser from "containers/TheUser";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;

const BurgerHeader = ({ openMenu }) => (
  <>
    <AppBar>
      <HamburgerButton onClick={openMenu} />
      <Container>
        <SearchBar id="mobile" />
        <ThemeToggler />
        <TheUser />
      </Container>
    </AppBar>
  </>
);

export default BurgerHeader;
