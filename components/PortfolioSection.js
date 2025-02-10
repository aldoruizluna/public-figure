import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const PortfolioSection = () => {
  const { t } = useTranslation();
  const basePath = process.env.NODE_ENV === 'production' ? '/public-figure' : '';

  return (
    <section id="portfolio" className="portfolio-section container">
      <h2>{t("portfolio.title")}</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <Image
            src={`${basePath}/images/placeholder1.svg`}
            alt={t('portfolio.item1.alt')}
            width={400}
            height={300}
            priority
          />
          <h3>{t("portfolio.item1.title")}</h3>
          <p>{t("portfolio.item1.description")}</p>
        </div>
        <div className="portfolio-item">
          <Image
            src={`${basePath}/images/placeholder2.svg`}
            alt={t('portfolio.item2.alt')}
            width={400}
            height={300}
          />
          <h3>{t("portfolio.item2.title")}</h3>
          <p>{t("portfolio.item2.description")}</p>
        </div>
        <div className="portfolio-item">
          <Image
            src={`${basePath}/images/placeholder3.svg`}
            alt={t('portfolio.item3.alt')}
            width={400}
            height={300}
          />
          <h3>{t("portfolio.item3.title")}</h3>
          <p>{t("portfolio.item3.description")}</p>
        </div>
        <div className="portfolio-item">
          <Image
            src={`${basePath}/images/placeholder4.svg`}
            alt={t('portfolio.item4.alt')}
            width={400}
            height={300}
          />
          <h3>{t("portfolio.item4.title")}</h3>
          <p>{t("portfolio.item4.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
