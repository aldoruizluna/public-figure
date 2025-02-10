import "../styles/globals.css";
import "../config/i18n";
import { ThemeProvider } from "../components/ThemeProvider";
import { defaultTheme } from "../config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider initialTheme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
