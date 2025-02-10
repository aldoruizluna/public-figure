import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section container">
      <h2>{t("about.title")}</h2>
      <p>{t("about.description")}</p>
    </section>
  );
};

export default AboutSection;
