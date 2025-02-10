import Link from "next/link";
import { useTranslation } from "react-i18next";
import { branding } from "../config/branding";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
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
