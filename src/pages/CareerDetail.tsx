import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { Badge } from "../components/common/Badge";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { SiteLayout } from "../components/layout/SiteLayout";
import { jobsData } from "../data/jobs";
import { siteConfig } from "../data/siteConfig";
import { submitToAdapter } from "../lib/formAdapter";
import { NotFound } from "./NotFound";

const applySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  portfolioUrl: z.string().trim().url("Please enter a valid URL.").or(z.literal("")),
  note: z.string().trim().min(10, "Please share a brief note about your experience."),
});

type ApplyFormValues = z.infer<typeof applySchema>;

export function CareerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const job = jobsData.find((j) => j.slug === slug);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
  });

  if (!job) return <NotFound />;

  const relatedJobs = jobsData.filter((j) => j.slug !== job.slug).slice(0, 3);

  const onSubmit = async (values: ApplyFormValues) => {
    setStatus("loading");
    setFeedback("");
    try {
      const res = await submitToAdapter(
        siteConfig.endpoints.careerApply,
        { ...values, jobSlug: job.slug, jobTitle: job.title },
        `Application received for ${job.title}.`
      );
      setStatus("success");
      setFeedback(res.message);
      reset();
    } catch {
      setStatus("error");
      setFeedback("Unable to submit application right now. Please try again later.");
    }
  };

  return (
    <SiteLayout title={job.seo.title} description={job.seo.description}>
      <section className="banner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="grow" className="align-center">
            <Badge label={job.category} />
            <div className="inner-container-750">
              <h1 className="banner-title">{job.title}</h1>
              <div className="inner-container-600">
                <p>{job.summary}</p>
              </div>
              <div className="mt-30">
                <a href="#apply-form" className="primary-button w-button">
                  Apply
                </a>
              </div>
            </div>
          </div>

          {/* Metadata Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginTop: "60px",
              padding: "24px",
              background: "var(--bg-color--card-bg-dark)",
              border: "1px solid var(--bg-color--border)",
              borderRadius: "16px",
            }}
          >
            <div>
              <div className="text-x-small">Posted On</div>
              <div style={{ color: "#fff", fontWeight: 500, marginTop: "4px" }}>{job.postedOn}</div>
            </div>
            <div>
              <div className="text-x-small">Role</div>
              <div style={{ color: "#fff", fontWeight: 500, marginTop: "4px" }}>{job.roleLabel}</div>
            </div>
            <div>
              <div className="text-x-small">Type</div>
              <div style={{ color: "#fff", fontWeight: 500, marginTop: "4px" }}>
                {job.employmentType}
              </div>
            </div>
            <div>
              <div className="text-x-small">Location</div>
              <div style={{ color: "#fff", fontWeight: 500, marginTop: "4px" }}>{job.location}</div>
            </div>
          </div>

          {/* Rich Content */}
          <div style={{ maxWidth: "820px", margin: "60px auto 0", display: "grid", gap: "36px" }}>
            <div>
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Job Introduction</h2>
              <p>{job.introduction}</p>
            </div>
            <div>
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Your Mission</h2>
              <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px" }}>
                {job.missions.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Responsibilities</h2>
              <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px" }}>
                {job.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Requirements</h2>
              <ul style={{ paddingLeft: "20px", display: "grid", gap: "10px" }}>
                {job.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div id="apply-form" style={{ maxWidth: "820px", margin: "60px auto 0" }}>
            <form className="contact-form-area" onSubmit={handleSubmit(onSubmit)} noValidate>
              <h2 className="card-title">Apply for {job.title}</h2>
              <div className="contact-field-area">
                <div className="contact-field-wrap">
                  <label htmlFor="apply-name" className="contact-input-label">
                    Full Name
                  </label>
                  <input
                    id="apply-name"
                    type="text"
                    className="contact-input-field w-input"
                    placeholder="Enter your full name"
                    {...register("fullName")}
                  />
                  {errors.fullName && <div className="field-error">{errors.fullName.message}</div>}
                </div>
                <div className="contact-field-wrap">
                  <label htmlFor="apply-email" className="contact-input-label">
                    Email
                  </label>
                  <input
                    id="apply-email"
                    type="email"
                    className="contact-input-field w-input"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  {errors.email && <div className="field-error">{errors.email.message}</div>}
                </div>
                <div className="contact-field-wrap" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="apply-portfolio" className="contact-input-label">
                    Portfolio / LinkedIn URL
                  </label>
                  <input
                    id="apply-portfolio"
                    type="url"
                    className="contact-input-field w-input"
                    placeholder="https://linkedin.com/in/..."
                    {...register("portfolioUrl")}
                  />
                  {errors.portfolioUrl && (
                    <div className="field-error">{errors.portfolioUrl.message}</div>
                  )}
                </div>
                <div className="contact-field-wrap" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="apply-note" className="contact-input-label">
                    Why FlowSwipe?
                  </label>
                  <textarea
                    id="apply-note"
                    className="contact-input-field message w-input"
                    placeholder="Tell us about your relevant experience..."
                    {...register("note")}
                  />
                  {errors.note && <div className="field-error">{errors.note.message}</div>}
                </div>
              </div>
              <div className="contact-button-wrap">
                <button
                  type="submit"
                  className="primary-button w-button"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Submitting..." : "Submit Application"}
                </button>
              </div>
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
            </form>
          </div>

          {/* Related Roles */}
          <div style={{ marginTop: "80px" }}>
            <h2 className="section-title" style={{ marginBottom: "32px" }}>
              More Open Positions
            </h2>
            <div className="w-dyn-items w-row">
              {relatedJobs.map((rj) => (
                <div key={rj.id} className="w-col w-col-4">
                  <div className="career-card">
                    <div className="career-tag">{rj.employmentType}</div>
                    <h3 className="card-title">{rj.title}</h3>
                    <p className="mg-0">{rj.location}</p>
                    <div className="mt-15">
                      <Link to={`/careers/${rj.slug}`} className="primary-button w-button">
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}
