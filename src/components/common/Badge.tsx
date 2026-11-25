import { mediaAssets } from "../../data/media";

interface BadgeProps {
  label: string;
  variant?: "base" | "home";
}

export function Badge({ label, variant = "base" }: BadgeProps) {
  const isHome = variant === "home";
  return (
    <div
      className={
        isHome ? "subtitle w-variant-4226b75b-234f-1af4-3d0a-bbbaf6cc4b78" : "subtitle"
      }
    >
      <div
        className={
          isHome
            ? "subtitle-icon-wrap w-variant-4226b75b-234f-1af4-3d0a-bbbaf6cc4b78"
            : "subtitle-icon-wrap"
        }
      >
        <img src={mediaAssets.subtitleStar} alt="" aria-hidden="true" />
      </div>
      <div>{label}</div>
    </div>
  );
}
