const MARQUEE_PHRASE =
  "TAP INTO A SMARTER WAY TO PAY. ✦ ONE CARD. EVERY PAYMENT. TOTAL CONTROL. ✦ SEAMLESS PAYMENTS FOR A CASHLESS WORLD. ✦";

export function FooterMarquee() {
  return (
    <div className="footer-marquee-area fs-marquee-pause" aria-label="FlowSwipe highlights">
      <div className="fs-marquee-track">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="footer-marquee-wrap" aria-hidden={i > 0}>
            <p className="footer-marquee-text">{MARQUEE_PHRASE}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
