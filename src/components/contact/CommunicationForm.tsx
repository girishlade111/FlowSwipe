import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "../../data/siteConfig";
import { submitToAdapter } from "../../lib/formAdapter";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional(),
  company: z.string().trim().min(1, "Please enter your company name."),
  message: z.string().trim().min(5, "Please write a brief message (at least 5 characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function CommunicationForm() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("loading");
    setStatusMessage("");
    try {
      const res = await submitToAdapter(
        siteConfig.endpoints.contact,
        values,
        "Thank you for reaching out! Your message has been submitted successfully. Our team will get back to you soon."
      );
      setSubmitState("success");
      setStatusMessage(res.message);
      reset();
    } catch {
      setSubmitState("error");
      setStatusMessage(
        "Oops! Something went wrong while submitting your message. Please try again or contact us directly."
      );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="w-layout-blockcontainer container w-container">
        <div animate="slide-top" className="align-center">
          <h2 className="section-title">Frequently used communication</h2>
          <div className="inner-container-500">
            <div className="mt-10">
              <p>Access the most common communication tools for fast and effective messaging.</p>
            </div>
          </div>
        </div>

        <div animate="slide-top" className="section-spacer">
          <div className="contact-form w-form">
            <form className="contact-form-area" onSubmit={handleSubmit(onSubmit)} noValidate>
              <h3 className="card-title">Your Information</h3>
              <div className="contact-field-area">
                <div className="contact-field-wrap">
                  <label htmlFor="contact-name" className="contact-input-label">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="contact-input-field w-input"
                    placeholder="Enter your name"
                    {...register("name")}
                  />
                  {errors.name && <div className="field-error">{errors.name.message}</div>}
                </div>

                <div className="contact-field-wrap">
                  <label htmlFor="contact-email" className="contact-input-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="contact-input-field w-input"
                    placeholder="Enter your mail"
                    {...register("email")}
                  />
                  {errors.email && <div className="field-error">{errors.email.message}</div>}
                </div>

                <div className="contact-field-wrap">
                  <label htmlFor="contact-phone" className="contact-input-label">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="contact-input-field w-input"
                    placeholder="Enter your number"
                    {...register("phone")}
                  />
                </div>

                <div className="contact-field-wrap">
                  <label htmlFor="contact-company" className="contact-input-label">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    className="contact-input-field w-input"
                    placeholder="Eg - FlowSwipe"
                    {...register("company")}
                  />
                  {errors.company && <div className="field-error">{errors.company.message}</div>}
                </div>

                <div className="contact-field-wrap" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="contact-message" className="contact-input-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="contact-input-field message w-input"
                    placeholder="Your brief message here..."
                    {...register("message")}
                  />
                  {errors.message && <div className="field-error">{errors.message.message}</div>}
                </div>
              </div>

              <div className="contact-button-wrap">
                <button
                  type="submit"
                  className="primary-button w-button"
                  disabled={submitState === "loading"}
                >
                  {submitState === "loading" ? "Please wait..." : "Submit"}
                </button>
              </div>
            </form>

            {submitState === "success" && (
              <div className="form-feedback form-feedback--success" role="status">
                {statusMessage}
              </div>
            )}
            {submitState === "error" && (
              <div className="form-feedback form-feedback--error" role="alert">
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
