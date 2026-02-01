
export interface Service {
  title: string;
  outcome: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  detail: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface LeadFormData {
  fullName: string;
  businessName: string;
  websiteUrl: string;
  monthlyRevenue: string;
  growthGoal: string;
  timeline: string;
}
