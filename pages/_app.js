import Layout from "parts/Layout";
import { Provider } from "react-redux";
import { useStore } from "store";
import GlobalStyle from "styles/global";
import { lightTheme, darkTheme } from "styles/theme";
import { ThemeProvider } from "styled-components";
import useDarkTheme from "utils/hooks/useDarkTheme";
import { AuthProvider } from "utils/hocs/AuthProvider";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [theme, themeToggler] = useDarkTheme();
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <AuthProvider>
            <Layout themeToggler={themeToggler}>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
