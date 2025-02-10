import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ThemeCustomizer from "./ThemeCustomizer";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isDevelopment = process.env.NODE_ENV === 'development';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <Navbar />
      {children}
      <button
        className={`back-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      />
      {isDevelopment && <ThemeCustomizer />}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
