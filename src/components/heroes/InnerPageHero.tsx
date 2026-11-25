import { Badge } from "../common/Badge";

interface InnerPageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export function InnerPageHero({ badge, title, description }: InnerPageHeroProps) {
  return (
    <section className="banner-section">
      <div className="w-layout-blockcontainer container w-container">
        <div animate-banner="grow" className="align-center">
          <Badge label={badge} />
          <div className="inner-container-750">
            <h1 className="banner-title">{title}</h1>
            <div className="inner-container-600">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
