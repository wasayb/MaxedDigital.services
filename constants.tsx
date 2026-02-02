import React from 'react';
import { Service, ProcessStep, FAQItem } from './types';

export const BRAND = {
  name: "MaxedDigital",
  domain: "MaxedDigital.services",
  email: "maxeddigital.services@gmail.com",
  instagram: "https://www.instagram.com/maxeddigital.services?igsh=MWNoOHVnbXdnZWw2dg==",
  tagline: "The High-Velocity Performance Partner",
  headline: "Scale Your Service Business with Conversion-First Digital Architecture",
  subheadline: "We don't build websites. We engineer high-yield conversion machines for performance-driven service providers ready to dominate their market.",
  primaryCTA: "Request Conversion Audit",
  secondaryCTA: "View Methodology",
  pricingAnchor: "Strategic engagements typically range from $2.5k - $12k+ depending on complexity and revenue targets."
};

export const SERVICES: Service[] = [
  {
    title: "High-Conversion Web Dev",
    outcome: "Turn traffic into traceable revenue with custom architecture.",
    deliverables: ["Performance Stack", "Conversion Engineering", "SEO Infrastructure"]
  },
  {
    title: "Lead Gen Landing Pages",
    outcome: "Maximize ROAS with high-yield, direct-response pages.",
    deliverables: ["A/B Testing", "Behavioral Design", "Rapid Deployment"]
  },
  {
    title: "UI/UX Optimization",
    outcome: "Eliminate friction to streamline the path to purchase.",
    deliverables: ["Heatmap Audit", "Click-Path Tuning", "Cognitive Load Reduction"]
  },
  {
    title: "Performance Marketing",
    outcome: "Scale acquisition via Google & Meta Ads targeting.",
    deliverables: ["Media Buying", "Retargeting Loops", "Attribution Modeling"]
  },
  {
    title: "Funnel & Campaign Strategy",
    outcome: "Architect the complete customer acquisition roadmap.",
    deliverables: ["Funnel Mapping", "Offer Positioning", "Market Analysis"]
  },
  {
    title: "Lead Capture & CRM Setup",
    outcome: "Automate nurturing and never miss a prospect.",
    deliverables: ["CRM Integration", "Lead Scoring", "Automation Workflows"]
  },
  {
    title: "Brand & Visual Design",
    outcome: "Establish authority with a high-fidelity visual system.",
    deliverables: ["Visual Language", "Logo Systems", "Brand Guidelines"]
  },
  {
    title: "Marketing & Ad Creatives",
    outcome: "Stop the scroll with high-impact visual assets.",
    deliverables: ["Ad Design", "Motion Graphics", "Copywriting"]
  },
  {
    title: "Maintenance & Optimization",
    outcome: "Ensure zero-downtime and continuous growth.",
    deliverables: ["Security Patches", "Speed Optimization", "Monthly Audits"]
  }
];

export const PROCESS: ProcessStep[] = [
  {
    step: "Extraction & Audit",
    detail: "We deep-dive into your existing data, identifying every conversion leak and performance bottleneck in your current stack."
  },
  {
    step: "Blueprint Architecture",
    detail: "Our team drafts the technical and psychological architecture designed to force engagement and streamline the conversion path."
  },
  {
    step: "Rapid Build-Out",
    detail: "We execute the high-fidelity build using our proprietary 14-day sprint framework, ensuring zero bloat and maximum speed."
  },
  {
    step: "Live Deployment",
    detail: "Your machine goes live. We monitor initial traffic behavior and perform immediate hot-fixes to optimize the launch performance."
  }
];

export const TESTIMONIALS = [
  {
    slug: "global-fintech-refactor",
    industry: "Global Fintech",
    problem: "High-friction onboarding resulting in 68% drop-off at the KYC phase.",
    solution: "Behavioral logic refactor and single-pane UI implementation.",
    impact: "24% improvement in user activation; 15% reduction in support overhead.",
    quote: "The speed of execution was unlike any agency we've worked with."
  },
  {
    slug: "saas-enterprise-acceleration",
    industry: "SaaS Enterprise",
    problem: "Legacy architecture causing 4s+ load times and high bounce rates on top funnels.",
    solution: "Vercel-native edge stack and automated asset optimization.",
    impact: "62% faster LCP; 11% conversion rate uplift across core acquisition pages.",
    quote: "MaxedDigital doesn't just design; they engineer for profit and performance."
  },
  {
    slug: "legal-services-attribution",
    industry: "Legal Services",
    problem: "Opaque lead tracking and zero attribution on high monthly ad spend.",
    solution: "End-to-end CRM integration and custom lead scoring engine.",
    impact: "40% increase in lead-to-call ratio; 100% marketing spend transparency.",
    quote: "We finally know exactly where our revenue is coming from and how to scale it."
  }
];

export const FAQS: FAQItem[] = [
  {
    q: "Why 14 days? Is that enough time for quality?",
    a: "We use a 'High-Velocity' framework. By stripping away typical agency bloat and focusing on performance-critical elements, we can deliver high-fidelity machines faster than traditional firms spend in 'discovery' meetings."
  },
  {
    q: "Do you work with any industry?",
    a: "We specialize in high-ticket service providers and high-growth startups where lead quality and conversion rates directly impact the bottom line."
  },
  {
    q: "What is your typical pricing model?",
    a: "We work on a per-project or monthly retainer basis. Most strategic builds range from $2.5k to $12k+ depending on complexity and revenue scale."
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Our Website Maintenance & Optimization service ensures your digital architecture stays secure, fast, and continuously optimized as your business scales."
  }
];