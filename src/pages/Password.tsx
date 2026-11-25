import { FormEvent, useState } from "react";
import { Badge } from "../components/common/Badge";
import { SiteLayout } from "../components/layout/SiteLayout";

export function Password() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setMessage("Please enter a password.");
      return;
    }
    // Client-side template parity only: never fake real server-side authentication.
    setMessage(
      "Incorrect password or no protected server session configured. Server-side authentication is required for production protected routes."
    );
  };

  return (
    <SiteLayout
      title="Protected Page - FlowSwipe"
      description="Protect your page from unauthorized persons using password authentication."
    >
      <section className="banner-section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="grow" className="align-center">
            <Badge label="Protected" />
            <div className="inner-container-600" style={{ marginTop: "18px" }}>
              <h1 className="banner-title">Password Protected</h1>
              <p>Protect your page from unauthorized persons using password authentication.</p>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: "460px",
                margin: "32px auto 0",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <label htmlFor="protected-pass" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}>
                Password
              </label>
              <input
                id="protected-pass"
                type="password"
                className="contact-input-field w-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="primary-button w-button">
                Submit Now
              </button>
              {message && (
                <div className="form-feedback form-feedback--error" role="alert">
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
