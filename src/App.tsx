import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { BlogCategory } from "./data/articles";
import { JobCategory } from "./data/jobs";
import { siteConfig } from "./data/siteConfig";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { BlogDetail } from "./pages/BlogDetail";
import { CareerDetail } from "./pages/CareerDetail";
import { Careers } from "./pages/Careers";
import { Changelog } from "./pages/Changelog";
import { Contact } from "./pages/Contact";
import { Features } from "./pages/Features";
import { Home } from "./pages/Home";
import { Instructions } from "./pages/Instructions";
import { Licenses } from "./pages/Licenses";
import { NotFound } from "./pages/NotFound";
import { Password } from "./pages/Password";
import { StyleGuide } from "./pages/StyleGuide";
import { Team } from "./pages/Team";
import { TeamDetail } from "./pages/TeamDetail";
import { TemplateShowcase } from "./pages/TemplateShowcase";
import { Terms } from "./pages/Terms";

function BlogCategoryRoute() {
  const { category } = useParams<{ category: string }>();
  const map: Record<string, BlogCategory> = {
    technology: "Technology",
    finance: "Finance",
    security: "Security",
  };
  return <Blog initialCategory={category ? map[category.toLowerCase()] : undefined} />;
}

function BlogAuthorRoute() {
  const { slug } = useParams<{ slug: string }>();
  return <Blog authorFilterSlug={slug} />;
}

function CareerCategoryRoute() {
  const { category } = useParams<{ category: string }>();
  const map: Record<string, JobCategory> = {
    technology: "Technology",
    finance: "Finance",
    security: "Security",
  };
  return <Careers initialCategory={category ? map[category.toLowerCase()] : undefined} />;
}

export function App() {
  const DefaultLanding = siteConfig.defaultRoute === "/home" ? Home : TemplateShowcase;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLanding />} />
        <Route path="/showcase" element={<TemplateShowcase />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<CareerDetail />} />
        <Route path="/career-category/:category" element={<CareerCategoryRoute />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/blog-category/:category" element={<BlogCategoryRoute />} />
        <Route path="/blog-author/:slug" element={<BlogAuthorRoute />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/401" element={<Password />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
