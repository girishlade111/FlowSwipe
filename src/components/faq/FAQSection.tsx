import { useState } from "react";
import { faqsData } from "../../data/faqs";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="section-regular">
      <div className="w-layout-blockcontainer container w-container">
        <div animate="slide-top" className="align-center">
          <div>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>
          <div className="inner-container-400">
            <div className="mt-10">
              <p>Find answers to common questions and get quick, helpful guidance easily.</p>
            </div>
          </div>
        </div>

        <div className="section-spacer">
          <div className="faq-area">
            {faqsData.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `faq-panel-${item.id}`;
              return (
                <div
                  key={item.id}
                  animate="slide-top"
                  className={`faq-wrap ${isOpen ? "active is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question-area"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(idx)}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: 0,
                      textAlign: "left",
                    }}
                  >
                    <div>{item.question}</div>
                    <div className={`faq-icon ${isOpen ? "active" : ""}`}>
                      <div className="faq-line" />
                      <div className={`faq-line-vertical ${isOpen ? "active" : ""}`} />
                    </div>
                  </button>
                  <div
                    id={panelId}
                    className="faq-answer-wrap"
                    style={{
                      maxHeight: isOpen ? "260px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      transition: "max-height 0.3s ease, opacity 0.25s ease",
                    }}
                  >
                    <div className="faq-answer-area">
                      <p className="faq-text">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
