import { mediaAssets } from "../../data/media";

interface BannerBackgroundProps {
  showCylinders?: boolean;
  variant?: "default" | "home";
}

export function BannerBackground({
  showCylinders = true,
  variant = "default",
}: BannerBackgroundProps) {
  const isHome = variant === "home";
  return (
    <div className={`banner-bg-area ${isHome ? "home" : ""}`} aria-hidden="true">
      {showCylinders && (
        <div className={`banner-bg-wrap ${isHome ? "home" : ""}`}>
          <div className="banner-image-wrap left">
            <img src={mediaAssets.cylinderBg} loading="eager" alt="" />
          </div>
          <div className="banner-image-wrap right">
            <img src={mediaAssets.cylinderBg} loading="eager" alt="" />
          </div>
        </div>
      )}
      <div className="banner-grey-bg" />
    </div>
  );
}
