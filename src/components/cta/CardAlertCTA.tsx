import { FormEvent, useState } from "react";
import { z } from "zod";
import { siteConfig } from "../../data/siteConfig";
import { submitToAdapter } from "../../lib/formAdapter";

const schema = z.object({
  email: z.string().trim().email("Please enter a valid business email address."),
});

export function CardAlertCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      setStatus("error");
      setFeedback(parsed.error.issues[0]?.message || "Invalid email.");
      return;
    }

    setStatus("loading");
    setFeedback("");
    try {
      const res = await submitToAdapter(
        siteConfig.endpoints.cardAlert,
        { email: parsed.data.email, source: "card-alert-cta" },
        "Thank you for subscribing! You’re now on our list to receive the latest updates, news, and insights from us."
      );
      setStatus("success");
      setFeedback(res.message);
      setEmail("");
    } catch {
      setStatus("error");
      setFeedback("Oops! We couldn’t process your subscription. Please try again in a moment.");
    }
  };

  return (
    <section className="cta-section">
      <div className="w-layout-blockcontainer container w-container">
        <div animate="slide-top" className="cta-area">
          <div animate="grow" className="cta-wrap">
            <h2 className="section-title">Get alerts when your card is ready</h2>
            <p>Receive instant updates when your card is ready.</p>
            <div className="cta-form-area w-form">
              <form className="cta-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="cta-email" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}>
                  Business Email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  name="email"
                  className="cta-form-input w-input"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  required
                />
                <button
                  type="submit"
                  className="primary-button w-button"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Book Now"}
                </button>
              </form>
              {status === "success" && (
                <div className="form-feedback form-feedback--success" role="status">
                  {feedback}
                </div>
              )}
              {status === "error" && (
                <div className="form-feedback form-feedback--error" role="alert">
                  {feedback}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
