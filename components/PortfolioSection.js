import { useTranslation } from "react-i18next";

const PortfolioSection = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="portfolio-section container">
      <h2>{t("portfolio.title")}</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="/images/placeholder1.jpg" alt="3D Printing & Scanning" />
          <h3>{t("portfolio.item1.title")}</h3>
          <p>{t("portfolio.item1.description")}</p>
        </div>
        <div className="portfolio-item">
          <img src="/images/placeholder2.jpg" alt="Multimaterial Fabrications" />
          <h3>{t("portfolio.item2.title")}</h3>
          <p>{t("portfolio.item2.description")}</p>
        </div>
        <div className="portfolio-item">
          <img src="/images/placeholder3.jpg" alt="Consulting Projects" />
          <h3>{t("portfolio.item3.title")}</h3>
          <p>{t("portfolio.item3.description")}</p>
        </div>
        <div className="portfolio-item">
          <img src="/images/placeholder4.jpg" alt="Creative Expression" />
          <h3>{t("portfolio.item4.title")}</h3>
          <p>{t("portfolio.item4.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
