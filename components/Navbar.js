import Link from "next/link";
import { useTranslation } from "react-i18next";
import { branding } from "../config/branding";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <a>{branding.name}</a>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="#home">
            <a>{t("nav.home")}</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a>{t("nav.about")}</a>
          </Link>
        </li>
        <li>
          <Link href="#services">
            <a>{t("nav.services")}</a>
          </Link>
        </li>
        <li>
          <Link href="#portfolio">
            <a>{t("nav.portfolio")}</a>
          </Link>
        </li>
        <li>
          <Link href="#blog">
            <a>{t("nav.blog")}</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a>{t("nav.contact")}</a>
          </Link>
        </li>
      </ul>
      <div className="lang-switcher">
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("es")}>ES</button>
      </div>
    </nav>
  );
};

export default Navbar;
