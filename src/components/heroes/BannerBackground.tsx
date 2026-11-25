import { mediaAssets } from "../../data/media";

interface BannerBackgroundProps {
  showCylinders?: boolean;
}

export function BannerBackground({ showCylinders = true }: BannerBackgroundProps) {
  return (
    <div className="banner-bg-area" aria-hidden="true">
      {showCylinders && (
        <div className="banner-bg-wrap">
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
