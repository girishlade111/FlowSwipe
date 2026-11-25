import { useState } from "react";
import { Badge } from "../components/common/Badge";
import { CommunicationForm } from "../components/contact/CommunicationForm";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { FAQSection } from "../components/faq/FAQSection";
import { SiteLayout } from "../components/layout/SiteLayout";
import { mediaAssets } from "../data/media";
import { siteConfig } from "../data/siteConfig";

export function Contact() {
  const [liveChatNotice, setLiveChatNotice] = useState(false);

  return (
    <SiteLayout
      title="Contact - FlowSwipe"
      description="Got something in mind? We'd love to help."
    >
      <section className="banner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="grow" className="align-center">
            <Badge label="Contact Us" />
            <div className="inner-container-750">
              <h1 className="banner-title">Let us know how can we help</h1>
              <div className="inner-container-600">
                <p>Got something in mind? We’d love to help.</p>
              </div>
            </div>
          </div>

          <div className="section-spacer">
            <div className="contact-card-area">
              <div animate-banner="slide-top" className="contact-border-wrap">
                <div className="contact-card">
                  <div className="contact-top-wrap">
                    <h2 className="card-title">Support</h2>
                    <div className="mt-10">
                      <p>Get fast, reliable assistance whenever you need help.</p>
                    </div>
                  </div>
                  <div className="contact-card-image-wrap">
                    <img
                      src={mediaAssets.headphoneImg}
                      alt="3D translucent holographic customer support headset"
                    />
                  </div>
                  <a href={`mailto:${siteConfig.supportEmail}`} className="contact-card-link">
                    {siteConfig.supportEmail}
                  </a>
                  <div className="contact-card-bg-wrap" aria-hidden="true">
                    <img src={mediaAssets.integrationDotBg} alt="" />
                  </div>
                </div>
              </div>

              <div animate-banner="slide-top" className="contact-border-wrap">
                <div className="contact-card">
                  <div className="contact-top-wrap">
                    <h2 className="card-title">Live Chat</h2>
                    <div className="mt-10">
                      <p>Connect with our team for real-time support.</p>
                    </div>
                  </div>
                  <div className="contact-card-image-wrap">
                    <img
                      src={mediaAssets.chatBubbleImg}
                      alt="Transparent holographic glass speech bubble"
                    />
                  </div>
                  <button
                    type="button"
                    className="contact-card-link"
                    onClick={() => setLiveChatNotice((v) => !v)}
                    style={{ cursor: "pointer", fontFamily: "inherit" }}
                  >
                    Chat With Us
                  </button>
                  {liveChatNotice && (
                    <p className="text-x-small" style={{ color: "#ccc", marginTop: "8px", zIndex: 5 }}>
                      Live chat widget is unavailable in preview mode. Please use the contact form below.
                    </p>
                  )}
                  <div className="contact-card-bg-wrap" aria-hidden="true">
                    <img src={mediaAssets.integrationDotBg} alt="" />
                  </div>
                </div>
              </div>

              <div animate-banner="slide-top" className="contact-border-wrap">
                <div className="contact-card">
                  <div className="contact-top-wrap">
                    <h2 className="card-title">Help Centre</h2>
                    <div className="mt-10">
                      <p>Find answers and guidance quickly in our Help Centre.</p>
                    </div>
                  </div>
                  <div className="contact-card-image-wrap">
                    <img
                      src={mediaAssets.questionMarkImg}
                      alt="Glass translucent question mark enclosed in circular outline"
                    />
                  </div>
                  <a href="#faq" className="contact-card-link">
                    Learn More
                  </a>
                  <div className="contact-card-bg-wrap" aria-hidden="true">
                    <img src={mediaAssets.integrationDotBg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommunicationForm />
      <div id="faq">
        <FAQSection />
      </div>
      <CardAlertCTA />
    </SiteLayout>
  );
}
