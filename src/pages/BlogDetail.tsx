import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/common/Badge";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { SiteLayout } from "../components/layout/SiteLayout";
import { articlesData } from "../data/articles";
import { mediaAssets } from "../data/media";
import { NotFound } from "./NotFound";

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  const related = articlesData.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <SiteLayout title={article.seo.title} description={article.seo.description}>
      <section className="banner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="grow" className="align-center">
            <Link to={`/blog-category/${article.category.toLowerCase()}`}>
              <Badge label={article.category} />
            </Link>
            <div className="inner-container-750" style={{ marginTop: "18px" }}>
              <h1 className="banner-title" style={{ fontSize: "46px" }}>
                {article.title}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                marginTop: "28px",
                flexWrap: "wrap",
              }}
            >
              <Link
                to={`/blog-author/${article.author.slug}`}
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover" }}
                />
                <div style={{ textAlign: "left" }}>
                  <div className="text-x-small">Written by</div>
                  <div style={{ color: "#fff", fontWeight: 500 }}>{article.author.name}</div>
                </div>
              </Link>
              <div style={{ textAlign: "left" }}>
                <div className="text-x-small">Published</div>
                <div style={{ color: "#fff", fontWeight: 500 }}>{article.detailDate}</div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "48px",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid var(--bg-color--border)",
              maxHeight: "520px",
            }}
          >
            <img
              src={article.heroImage}
              alt={article.title}
              style={{ width: "100%", maxHeight: "520px", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Article Rich Body */}
          <article
            style={{
              maxWidth: "780px",
              margin: "60px auto 0",
              display: "grid",
              gap: "28px",
            }}
          >
            <div>
              <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Introduction</h2>
              <p>
                Starting fresh with a smarter approach to finance helps you stay organized, calm,
                and in full control. This platform guides you through spending, payments, and
                real-time updates with simple, secure tools built for everyday use. Every feature
                supports smoother decisions, clearer insights, and easier management no matter
                where life takes you each day, empowering your daily financial choices with
                confidence.
              </p>
            </div>

            <blockquote
              style={{
                margin: 0,
                padding: "24px 28px",
                borderRadius: "16px",
                background: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                color: "#fff",
                fontSize: "20px",
                lineHeight: "150%",
              }}
            >
              “Quickly jot down your ideas, reminders, and important details in one place. Keep
              everything organized, accessible, and easy to review anytime, anywhere.”
            </blockquote>

            <div>
              <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>
                Benefits of a universal payment card
              </h2>
              <p>
                The value of a global payment card lies not just in its ability to transact but in
                the comprehensive ecosystem of convenience and protection it offers.
              </p>
              <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px", marginTop: "12px" }}>
                <li>
                  <strong style={{ color: "#fff" }}>Seamless Global Access: </strong>Accepted at
                  millions of merchants worldwide, from high-end retailers to local street markets.
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>Multi-Currency Flexibility: </strong>Transact
                  without juggling different wallets or converting currencies at unfavourable
                  exchange counters.
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>Enhanced Digital Experience: </strong>
                  Integrated with modern mobile wallets to ensure smooth digital payments and
                  effortless transfers.
                </li>
              </ul>
            </div>

            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--bg-color--border)" }}>
              <img
                src={mediaAssets.styleGuideImg}
                alt="Global payment architecture illustration"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Why it matters</h2>
              <p>
                The relevance of universal payment cards becomes clearer when we look at how they
                simplify everyday experiences across the globe:
              </p>
              <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px", marginTop: "12px" }}>
                <li>
                  <strong style={{ color: "#fff" }}>Confidence Abroad: </strong>A single card
                  ensures smooth, reliable payments anywhere without carrying stacks of cash.
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>Frictionless Shopping: </strong>Experience
                  seamless, fast checkout, smart notifications, and secure payments.
                </li>
                <li>
                  <strong style={{ color: "#fff" }}>Optimized Costs: </strong>Eliminate surprise
                  exchange markups and hidden transfer fees.
                </li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "30px", marginBottom: "14px" }}>Conclusion</h2>
              <p>
                In a world where mobility and connectivity define modern living, universal payment
                cards have emerged as enablers of global freedom. By combining seamless
                international acceptance, enhanced security, and real-time insights, smart cards
                simplify how people and businesses move money across borders.
              </p>
            </div>
          </article>

          {/* Similar Blogs */}
          <div style={{ marginTop: "90px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <h2 className="section-title">Similar Blogs</h2>
              <Link to="/blog" className="primary-button w-button">
                Explore All Blogs
              </Link>
            </div>

            <div className="w-dyn-items w-row">
              {related.map((item) => (
                <div key={item.id} className="w-col w-col-4">
                  <article className="blog-card">
                    <div className="blog-image-area">
                      <Link to={`/blog/${item.slug}`} className="blog-image-wrap w-inline-block">
                        <img src={item.thumbnailImage} alt={item.title} className="blog-image" />
                      </Link>
                      <Link
                        to={`/blog-category/${item.category.toLowerCase()}`}
                        className="blog-category"
                      >
                        {item.category}
                      </Link>
                    </div>
                    <div className="blog-content-area">
                      <div className="blog-date-wrap">{item.publicationDate}</div>
                      <Link to={`/blog/${item.slug}`} className="card-title link">
                        {item.title}
                      </Link>
                      <Link to={`/blog/${item.slug}`} className="blog-link w-inline-block">
                        <span>Read more</span>
                        <img src={mediaAssets.arrowIcon} alt="" className="icon" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}
