import Link from "next/link";
import { useTranslation } from "react-i18next";
import { branding } from "../config/branding";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${height}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateNavHeight);
    updateNavHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">
            <a>{branding.name}</a>
          </Link>
        </div>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {['home', 'about', 'services', 'portfolio', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item}`}>
                  <a onClick={closeMenu}>{t(`nav.${item}`)}</a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="lang-switcher">
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("es")}>ES</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
