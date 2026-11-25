import { describe, expect, it } from "vitest";
import { articlesData } from "../data/articles";
import { faqsData } from "../data/faqs";
import { jobsData } from "../data/jobs";
import { policiesData } from "../data/policies";
import { teamMembersData } from "../data/team";
import { coreValuesData } from "../data/values";

describe("FlowSwipe CMS & Data Integrity", () => {
  it("has 3 team members with unique slugs and valid local portraits", () => {
    expect(teamMembersData).toHaveLength(3);
    const slugs = new Set(teamMembersData.map((t) => t.slug));
    expect(slugs.size).toBe(3);
    for (const m of teamMembersData) {
      expect(m.portrait.startsWith("/assets/")).toBe(true);
    }
  });

  it("has 6 career listings across Technology, Finance, and Security", () => {
    expect(jobsData).toHaveLength(6);
    const cats = new Set(jobsData.map((j) => j.category));
    expect(cats.has("Technology")).toBe(true);
    expect(cats.has("Finance")).toBe(true);
    expect(cats.has("Security")).toBe(true);
  });

  it("has 6 blog articles with unique slugs and local thumbnails", () => {
    expect(articlesData).toHaveLength(6);
    const slugs = new Set(articlesData.map((a) => a.slug));
    expect(slugs.size).toBe(6);
    for (const a of articlesData) {
      expect(a.thumbnailImage.startsWith("/assets/")).toBe(true);
    }
  });

  it("has 4 FAQs, 4 Core Values, and 3 Policy Tabs", () => {
    expect(faqsData).toHaveLength(4);
    expect(coreValuesData).toHaveLength(4);
    expect(policiesData).toHaveLength(3);
  });
});
