import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFlowSwipeAnimations } from "../../animations/useFlowSwipeAnimations";
import { BannerBackground } from "../heroes/BannerBackground";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface SiteLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showCylinders?: boolean;
  hideBackground?: boolean;
}

export function SiteLayout({
  children,
  title,
  description,
  showCylinders = true,
  hideBackground = false,
}: SiteLayoutProps) {
  const { pathname } = useLocation();
  useFlowSwipeAnimations(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }
  }, [pathname, title, description]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      {!hideBackground && <BannerBackground showCylinders={showCylinders} />}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
