import Sidebar from "containers/Sidebar";
import ContentWrapper from "./ContentWrapper";
import MainWrapper from "./MainWrapper";
import { Media, MediaContextProvider } from "utils/helpers/media";
import styled from "styled-components";
import SearchBar from "containers/SearchBar";
import ThemeToggler from "containers/ThemeToggler.js";
import TheUser from "containers/TheUser";
import AppHeader from "containers/AppHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import init from "actions/init";
import MyHead from "components/MyHead";

const Desktopwidgets = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  > * {
    &:not(:first-child) {
      margin-left: 12px;
    }
  }
`;

const Layout = ({ children, themeToggler }) => {
  console.log("layout");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
    console.log("layout2");
  }, [dispatch]);

  return (
    <>
      <MyHead />
      <MediaContextProvider>
        <Media at="sm">
          <MainWrapper>
            <AppHeader />
            <ContentWrapper>{children}</ContentWrapper>
          </MainWrapper>
        </Media>
        <Media greaterThan="sm">
          <MainWrapper>
            <Sidebar />
            <Desktopwidgets>
              <SearchBar id="desktop" />
              <ThemeToggler themeToggler={themeToggler} />
              <TheUser />
            </Desktopwidgets>
            <ContentWrapper>{children}</ContentWrapper>
          </MainWrapper>
        </Media>
      </MediaContextProvider>
    </>
  );
};

export default Layout;
