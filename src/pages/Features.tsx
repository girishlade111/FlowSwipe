import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { FAQSection } from "../components/faq/FAQSection";
import { DigitalIntegration } from "../components/features/DigitalIntegration";
import { GlobalPaymentsSection } from "../components/features/GlobalPaymentsSection";
import { SecurityBento } from "../components/features/SecurityBento";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";

export function Features() {
  return (
    <SiteLayout
      title="Features - FlowSwipe"
      description="Step into a world where payments meet lifestyle with smart features, effortless financial tools, and exclusive rewards."
    >
      <InnerPageHero
        badge="Features"
        title="Beyond Payments Into Lifestyle"
        description="Step into a world where payments meet lifestyle with smart features, effortless financial tools, and exclusive rewards."
      />
      <GlobalPaymentsSection />
      <SecurityBento variant="features" />
      <DigitalIntegration />
      <FAQSection />
      <CardAlertCTA />
    </SiteLayout>
  );
}
