import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="services-section container">
      <h2>{t("services.title")}</h2>
      <div className="services-grid">
        <div className="service-item">
          <h3>{t("services.item1.title")}</h3>
          <p>{t("services.item1.description")}</p>
        </div>
        <div className="service-item">
          <h3>{t("services.item2.title")}</h3>
          <p>{t("services.item2.description")}</p>
        </div>
        <div className="service-item">
          <h3>{t("services.item3.title")}</h3>
          <p>{t("services.item3.description")}</p>
        </div>
        <div className="service-item">
          <h3>{t("services.item4.title")}</h3>
          <p>{t("services.item4.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
