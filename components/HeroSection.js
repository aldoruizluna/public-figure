import { useTranslation } from 'react-i18next';
import Script from 'next/script';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <Script src="https://aframe.io/releases/1.2.0/aframe.min.js" strategy="afterInteractive" />

      <div className="hero-content">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
      </div>

      <div className="hero-scene">
        <a-scene embedded>
          <a-box
            position="0 1.25 -5"
            rotation="0 45 0"
            color="#4CC3D9"
            animation="property: rotation; to: 0 405 0; loop: true; dur: 8000"
          ></a-box>
          <a-sky color="#ECECEC"></a-sky>
        </a-scene>
      </div>
    </section>
  );
};

export default HeroSection;
