import { useTranslation } from "react-i18next";

const BlogSection = () => {
  const { t } = useTranslation();
  return (
    <section id="blog" className="blog-section container">
      <h2>{t("blog.title")}</h2>
      <div className="blog-posts">
        <article className="blog-post">
          <h3>{t("blog.post1.title")}</h3>
          <p>{t("blog.post1.excerpt")}</p>
          <a href="#">{t("blog.readMore")}</a>
        </article>
        <article className="blog-post">
          <h3>{t("blog.post2.title")}</h3>
          <p>{t("blog.post2.excerpt")}</p>
          <a href="#">{t("blog.readMore")}</a>
        </article>
      </div>
    </section>
  );
};

export default BlogSection;
