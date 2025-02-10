import { useTranslation } from "react-i18next";
import Head from "next/head";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero-section">
      <Head>
        <script src="https://aframe.io/releases/1.2.0/aframe.min.js" />
      </Head>
      <div className="hero-content">
        <h1>{t("home.title")}</h1>
        <p>{t("home.subtitle")}</p>
      </div>
      <a-scene embedded className="hero-scene">
        <a-box
          position="0 1.25 -5"
          rotation="0 45 0"
          color="#4CC3D9"
          animation="property: rotation; to: 0 405 0; loop: true; dur: 8000"
        ></a-box>
        <a-sky color="#ECECEC"></a-sky>
      </a-scene>
    </section>
  );
};

export default HeroSection;
