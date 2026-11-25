import { useState } from "react";
import { Link } from "react-router-dom";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";
import { articlesData, BlogCategory } from "../data/articles";
import { mediaAssets } from "../data/media";

const BLOG_FILTERS: Array<"All" | BlogCategory> = ["All", "Technology", "Finance", "Security"];

interface BlogProps {
  initialCategory?: BlogCategory;
  authorFilterSlug?: string;
}

export function Blog({ initialCategory, authorFilterSlug }: BlogProps) {
  const [activeFilter, setActiveFilter] = useState<"All" | BlogCategory>(initialCategory || "All");

  const filtered = articlesData.filter((art) => {
    if (authorFilterSlug && art.author.slug !== authorFilterSlug) return false;
    if (activeFilter !== "All" && art.category !== activeFilter) return false;
    return true;
  });

  const authorName = authorFilterSlug
    ? articlesData.find((a) => a.author.slug === authorFilterSlug)?.author.name
    : undefined;

  return (
    <SiteLayout
      title={authorName ? `${authorName} - FlowSwipe Blog` : "Blog - FlowSwipe"}
      description="Understand the modern fintech landscape and how trends are creating seamless, secure financial services."
    >
      <InnerPageHero
        badge="Blogs"
        title={authorName ? `Articles by ${authorName}` : "Latest Modern Fintech Trends"}
        description="Understand the modern fintech landscape and how trends are creating seamless, secure financial services."
      />

      <section className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <h2 className="section-title">Latest Articles</h2>
            <div className="card-listing-tab-menu" role="tablist" aria-label="Filter articles by category" style={{ marginBottom: 0 }}>
              {BLOG_FILTERS.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(cat)}
                    className={`card-listing-tab-link w-inline-block ${isActive ? "is-active" : ""}`}
                    style={{ border: 0, cursor: "pointer", fontFamily: "inherit", fontSize: "16px" }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="section-spacer">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                {filtered.map((article) => (
                  <div key={article.id} role="listitem" className="blog-collection-item w-dyn-item w-col w-col-4">
                    <article className="blog-card">
                      <div className="blog-image-area">
                        <Link to={`/blog/${article.slug}`} className="blog-image-wrap w-inline-block">
                          <img
                            src={article.thumbnailImage}
                            alt={article.title}
                            className="blog-image"
                          />
                        </Link>
                        <Link to={`/blog-category/${article.category.toLowerCase()}`} className="blog-category">
                          {article.category}
                        </Link>
                      </div>

                      <div className="blog-content-area">
                        <div className="blog-date-wrap">
                          <span>{article.publicationDate}</span>
                        </div>
                        <Link to={`/blog/${article.slug}`} className="card-title link">
                          {article.title}
                        </Link>
                        <Link to={`/blog/${article.slug}`} className="blog-link w-inline-block">
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
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}
