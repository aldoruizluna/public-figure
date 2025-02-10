import "../styles/globals.css";
import "../config/i18n";
import { ThemeProvider } from "../components/ThemeProvider";
import { defaultTheme } from "../config/theme";
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider initialTheme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
