export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export interface MetricItem {
  label: string;
  value: string;
  subtext: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string;
}

export interface IndustryDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  heroHeadline: string;
  heroDesc: string;
  iconType: string;
  overview: string;
  workflows: WorkflowStep[];
  features: FeatureItem[];
  metrics: MetricItem[];
  integrations: string[];
}

export const INDUSTRIES_DATA: IndustryDetail[] = [
  {
    slug: "hvac-services",
    title: "HVAC & Climate Control",
    subtitle: "24/7 Emergency Dispatch & Equipment Intake",
    category: "Home Services",
    badge: "24/7 EMERGENCY DISPATCH",
    heroHeadline: "24/7 Emergency Dispatch Answering for HVAC Companies",
    heroDesc: "A no-AC call at 9pm on a Saturday is worth a same-week job if someone picks up. We make sure someone — or something — does.",
    iconType: "hvac",
    overview: "During seasonal heatwaves or winter freezes, HVAC call volume spikes overwhelm traditional dispatchers. IronLoop scales instantly to handle unlimited concurrent calls, qualifies system diagnostics, and books high-ticket jobs directly to your technicians' boards.",
    workflows: [
      { step: "01", title: "Emergency Call Capture", desc: "Answers no-cooling/no-heat calls immediately, eliminating lost leads.", icon: "hvac" },
      { step: "02", title: "Diagnostic & Equipment Intake", desc: "Captures unit age, SEER rating, brand, and problem symptoms.", icon: "thermostat" },
      { step: "03", title: "ServiceTitan / CRM Sync", desc: "Pushes job record, customer notes, and zip code to dispatch board.", icon: "move_to_inbox" },
      { step: "04", title: "Tech Dispatch & ETA SMS", desc: "Sends technician arrival window and tracking link to homeowner.", icon: "local_shipping" }
    ],
    features: [
      { title: "Peak Heatwave Scalability", desc: "Effortlessly handle 1,000+ simultaneous emergency calls with zero degraded response quality.", icon: "bolt" },
      { title: "Smart Diagnostic Pre-Screening", desc: "Asks intelligent questions (thermostat power, breaker status) to eliminate costly false dispatches.", icon: "psychology" },
      { title: "Maintenance Plan Upselling", desc: "Automatically pitches and enrolls customers into annual service agreements during routine calls.", icon: "trending_up" },
      { title: "Dynamic On-Call Routing", desc: "Rotates after-hours dispatch notifications based on your complex technician shift schedules.", icon: "alt_route" }
    ],
    metrics: [
      { label: "Emergency Response", value: "Instant", subtext: "0 missed peak season calls" },
      { label: "Call Conversion Rate", value: "99.4%", subtext: "Immediate booking vs voicemail" },
      { label: "Revenue Lift", value: "+$14,500/mo", subtext: "Captured after-hours emergencies" }
    ],
    integrations: ["ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge", "Workiz", "HubSpot"]
  },
  {
    slug: "plumbing-urgent",
    title: "Plumbing & Urgent Repairs",
    subtitle: "Rapid Leak Triage & After-Hours Routing",
    category: "Home Services",
    badge: "AFTER-HOURS PLUMBING TRIAGE",
    heroHeadline: "After-Hours Call Answering for Plumbers",
    heroDesc: "Leaks don't wait for business hours. Callers get triaged and booked immediately, day or night.",
    iconType: "plumbing",
    overview: "Water damage compounds every minute. IronLoop provides instant, intelligent phone triage for late-night leaks, requests property photos for context, and dispatches the closest plumber with complete job parameters.",
    workflows: [
      { step: "01", title: "Leak Emergency Intake", desc: "Identifies main shut-off status and instructs caller to turn off main valve.", icon: "plumbing" },
      { step: "02", title: "SMS Media Request", desc: "Automatically texts caller requesting a photo/video of the leak location.", icon: "add_a_photo" },
      { step: "03", title: "Geo-Proximity Dispatch", desc: "Finds the nearest available technician in the service area.", icon: "near_me" },
      { step: "04", title: "Work Order Sync", desc: "Posts complete job details to dispatch management software.", icon: "receipt_long" }
    ],
    features: [
      { title: "Main Shut-Off Safety Protocol", desc: "Provides callers with clear voice instructions to shut off main water lines while the tech travels.", icon: "water_drop" },
      { title: "Instant Photo Intelligence", desc: "Deploys an automated SMS link so plumbers see the exact pipe condition before arriving on-site.", icon: "camera_alt" },
      { title: "Dispatch Priority Scoring", desc: "Algorithmically ranks emergency leaks above routine drain cleanings for maximum ROI.", icon: "star" },
      { title: "Automated Job Quoting", desc: "Provides upfront service call fee disclosures and collects verbal agreement on recording.", icon: "gavel" }
    ],
    metrics: [
      { label: "Dispatch Speed", value: "12 Sec", subtext: "From call end to tech notification" },
      { label: "Job Conversion", value: "94%", subtext: "Captured before competitor call" },
      { label: "After-Hours ROI", value: "5.2x", subtext: "High-ticket emergency water jobs" }
    ],
    integrations: ["ServiceTitan", "Housecall Pro", "Jobber", "Workiz", "Zapier", "QuickBooks"]
  },
  {
    slug: "home-repair-services",
    title: "Roofing & General Contracting",
    subtitle: "Roofing, Electrical & General Contracting Dispatch",
    category: "Home Services",
    badge: "ESTIMATE FOLLOW-UP AUTOMATION",
    heroHeadline: "Estimate Follow-Up Automation for Roofing Companies",
    heroDesc: "Estimates that don't get followed up die quietly. We keep following up until they either book or clearly say no.",
    iconType: "repair",
    overview: "Contractors lose thousands when prospective clients call multiple competitors. IronLoop answers instantly, qualifies budget and timeline parameters, and locks in the estimate appointment before anyone else.",
    workflows: [
      { step: "01", title: "Contractor Inquiry", desc: "AI answers project calls for roofing, electrical, solar, or general repair.", icon: "home_repair_service" },
      { step: "02", title: "Project Scope Qualification", desc: "Asks property ownership, timeline, budget, and project urgency.", icon: "quiz" },
      { step: "03", title: "Estimator Calendar Booking", desc: "Schedules estimator site visit directly into Google/Outlook/CRM calendar.", icon: "event_available" },
      { step: "04", title: "Pre-Visit Confirmation", desc: "Sends text reminder with estimator bio and photo for safety and trust.", icon: "verified" }
    ],
    features: [
      { title: "Instant Lead Lock-in", desc: "Dominate local competitors by booking on-site estimates in seconds, 24/7.", icon: "speed" },
      { title: "Unqualified Lead Filtering", desc: "Automatically filters out out-of-area calls or low-budget requests based on your criteria.", icon: "filter_alt" },
      { title: "Storm Damage Surge Capture", desc: "Handles exponential call volume spikes after hail or wind storms for roofing companies.", icon: "thunderstorm" },
      { title: "Multi-Trade Routing", desc: "Intelligently directs electrical vs plumbing vs carpentry inquiries to respective project leads.", icon: "schema" }
    ],
    metrics: [
      { label: "Estimate Conversion", value: "48%", subtext: "First contractor to book" },
      { label: "Missed Call Rate", value: "0%", subtext: "24/7 lead intake response" },
      { label: "Tech Utilization", value: "92%", subtext: "Optimized estimator calendar" }
    ],
    integrations: ["Jobber", "Salesforce", "AccuLynx", "Contractor Accelerator", "Google Calendar", "HubSpot"]
  },
  {
    slug: "pest-lawn-care",
    title: "Pest & Lawn Care",
    subtitle: "Seasonal Demand Management & Route Cluster Booking",
    category: "Home Services",
    badge: "SEASONAL VOLUME SCALING",
    heroHeadline: "Seasonal Call Volume Handling for Pest & Lawn Companies",
    heroDesc: "Spring and summer spikes stop overwhelming your front desk — every call still gets answered and booked.",
    iconType: "pest",
    overview: "Pest and lawn service demand fluctuates heavily with weather patterns. IronLoop intelligently qualifies pest types, books services into high-density geographic routes, and automates annual contract renewals to maximize operational efficiency.",
    workflows: [
      { step: "01", title: "Pest / Lawn Inquiry", desc: "AI identifies pest type (termites, rodents, bedbugs) or lawn service needs.", icon: "pest_control" },
      { step: "02", title: "Neighborhood Cluster Check", desc: "Suggests dates when technicians are already in the customer's neighborhood.", icon: "map" },
      { step: "03", title: "Contract Plan Selection", desc: "Presents quarterly protection plans vs one-time treatment options.", icon: "description" },
      { step: "04", title: "Recurring Billing Setup", desc: "Collects payment authorization and schedules recurring service calendar.", icon: "credit_card" }
    ],
    features: [
      { title: "Route Density Optimizer", desc: "Clusters bookings into existing technician routes to minimize windshield time and fuel costs.", icon: "route" },
      { title: "Pest Severity Assessment", desc: "Categorizes termite or hornet emergencies for urgent, same-day technician dispatch.", icon: "bug_report" },
      { title: "Seasonal Outreach Engine", desc: "Automatically initiates outbound calls for spring lawn fertilization or fall pest prep.", icon: "grass" },
      { title: "RealGreen Data Sync", desc: "Integrates natively with industry-leading lawn and pest operational platforms.", icon: "sync_alt" }
    ],
    metrics: [
      { label: "Route Efficiency", value: "+28%", subtext: "Clustered neighborhood bookings" },
      { label: "Contract Renewal", value: "91%", subtext: "Automated recurring renewal" },
      { label: "Lead Response Time", value: "< 2 Sec", subtext: "Zero missed web/phone inquiries" }
    ],
    integrations: ["RealGreen Systems", "PestRoutes / FieldRoutes", "Workiz", "Jobber", "Zapier"]
  }
];

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return INDUSTRIES_DATA.find((item) => item.slug === slug);
}
