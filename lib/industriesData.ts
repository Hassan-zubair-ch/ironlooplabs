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
    slug: "hospitals-healthcare",
    title: "Hospitals & Healthcare",
    subtitle: "24/7 Emergency Intake & HIPAA Triage",
    category: "Healthcare",
    badge: "100% HIPAA COMPLIANT",
    heroHeadline: "AI-Powered Patient Triage & Emergency Call Routing",
    heroDesc: "Zero-wait inbound call handling, encrypted patient intake, emergency ER escalation, and automated EHR calendar synchronization.",
    iconType: "hospital",
    overview: "Hospitals handle high call volumes with critical urgency. IronLoop's AI Receptionist acts as a first-line intake specialist, classifying emergency calls, capturing encrypted patient details, and instantly escalating critical cases to on-call medical staff.",
    workflows: [
      { step: "01", title: "Inbound Patient Call", desc: "AI answers within 1 ring with natural, empathetic voice response.", icon: "phone_in_talk" },
      { step: "02", title: "HIPAA Triage & Tagging", desc: "Evaluates symptoms and flags ER emergencies vs routine appointment requests.", icon: "health_and_safety" },
      { step: "03", title: "EHR Sync & On-Call Routing", desc: "Updates patient chart in Epic/Cerner and alerts emergency physician on call.", icon: "sync" },
      { step: "04", title: "Automated SMS Followup", desc: "Sends patient arrival instructions and location maps via encrypted SMS.", icon: "sms" }
    ],
    features: [
      { title: "24/7 Multi-Line Reception", desc: "Handles hundreds of simultaneous patient calls without busy signals or hold queues.", icon: "support_agent" },
      { title: "HIPAA Encrypted Vault", desc: "All voice transcripts and patient data are encrypted with enterprise-grade SOC2 & HIPAA compliance.", icon: "lock" },
      { title: "Emergency Escalation Protocols", desc: "Immediate warm-transfer to ER charge nurse when high-risk symptom keywords are detected.", icon: "warning" },
      { title: "Bilingual Patient Support", desc: "Seamlessly switches between English, Spanish, and 20+ languages for inclusive care.", icon: "translate" }
    ],
    metrics: [
      { label: "Call Response Time", value: "< 3 Sec", subtext: "Zero hold time for emergency calls" },
      { label: "HIPAA Compliance", value: "100%", subtext: "AES-256 encrypted data pipelines" },
      { label: "Intake Accuracy", value: "99.8%", subtext: "Automated symptom log precision" }
    ],
    integrations: ["Epic Systems", "Cerner EHR", "AthenaHealth", "Allscripts", "Salesforce Health Cloud", "Zapier"]
  },
  {
    slug: "medical-clinics",
    title: "Medical Clinics & Practices",
    subtitle: "Automated Scheduling & Patient Intake",
    category: "Healthcare",
    badge: "CLINIC AUTOMATION",
    heroHeadline: "Streamline Specialty Appointments & Reduce No-Shows",
    heroDesc: "Automate patient scheduling, pre-screening questions, appointment reminders, and prescription inquiry dispatch.",
    iconType: "clinic",
    overview: "Specialty medical clinics face constant front-desk bottlenecks. IronLoop automates phone booking, answers common pre-appointment questions, and manages cancellation fill-ins automatically.",
    workflows: [
      { step: "01", title: "Patient Inquiry Intake", desc: "AI answers inquiries, verifies insurance eligibility, and collects reason for visit.", icon: "clinical_notes" },
      { step: "02", title: "Doctor Slot Matching", desc: "Scans provider calendar for specialty availability and reserves optimal appointment.", icon: "calendar_month" },
      { step: "03", title: "Pre-Visit Qualification", desc: "Collects intake forms and pre-op fasting instructions via automated text.", icon: "checklist" },
      { step: "04", title: "Cancellation Recovery", desc: "Automatically contacts waitlisted patients when a slot opens up.", icon: "autorenew" }
    ],
    features: [
      { title: "Smart Scheduling Engine", desc: "Enforces clinic-specific booking rules, doctor availability, and visit lengths.", icon: "edit_calendar" },
      { title: "No-Show Prevention", desc: "Sends interactive 2-way SMS reminders with 1-click confirmation or rescheduling.", icon: "notifications_active" },
      { title: "Prescription Refill Routing", desc: "Captures pharmacy details and routes refill requests directly to nursing staff.", icon: "medication" },
      { title: "Insurance Verification", desc: "Verifies policy active status during intake before patient arrives.", icon: "verified_user" }
    ],
    metrics: [
      { label: "No-Show Reduction", value: "42%", subtext: "Interactive 2-way SMS confirmations" },
      { label: "Calendar Capacity", value: "+35%", subtext: "Automated waitlist backfill" },
      { label: "Staff Time Saved", value: "18 hrs/wk", subtext: "Eliminated routine phone intake" }
    ],
    integrations: ["Kareo", "DrChrono", "ModMed", "AdvancedMD", "Google Workspace", "Twilio"]
  },
  {
    slug: "dental-practices",
    title: "Dental Practices",
    subtitle: "Hygiene Recalls & Urgent Dental Triage",
    category: "Healthcare",
    badge: "PRACTICE GROWTH",
    heroHeadline: "Automate Dental Recalls & After-Hours Emergency Booking",
    heroDesc: "Recover lapsed hygiene patients, book emergency toothache appointments after hours, and sync with your dental software.",
    iconType: "dental",
    overview: "Unbooked chairs cost dental practices thousands weekly. IronLoop runs proactive hygiene recall campaigns, triages urgent dental pain after-hours, and keeps your schedule full.",
    workflows: [
      { step: "01", title: "Emergency Pain Triage", desc: "AI assesses severe pain or broken teeth and offers immediate emergency slots.", icon: "emergency" },
      { step: "02", title: "EHR Sync (Dentrix/OpenDental)", desc: "Checks patient history and updates chart notes automatically.", icon: "database" },
      { step: "03", title: "Hygiene Recall Campaign", desc: "Triggers automated outbound voice & SMS for patients due for 6-month checkup.", icon: "campaign" },
      { step: "04", title: "Deposit & Booking Capture", desc: "Secures appointment slot with automated deposit link if required.", icon: "payments" }
    ],
    features: [
      { title: "After-Hours Pain Intake", desc: "Captures urgent dental calls 24/7 and dispatches on-call dentist for true emergencies.", icon: "nightlight" },
      { title: "Hygiene Reactivation", desc: "Fills empty morning/afternoon hygiene slots by targeting overdue patients.", icon: "clean_hands" },
      { title: "Family Booking Flow", desc: "Allows parents to book multiple family members in back-to-back time slots.", icon: "family_restroom" },
      { title: "Treatment Plan Follow-up", desc: "Follows up on unaccepted treatment plans with tailored voice explanations.", icon: "assignment_turned_in" }
    ],
    metrics: [
      { label: "Hygiene Recalls", value: "+60%", subtext: "Automated 6-month outreach" },
      { label: "After-Hours Capture", value: "88%", subtext: "Emergency toothache conversion" },
      { label: "Chair Occupancy", value: "95%", subtext: "Consistent calendar fill rate" }
    ],
    integrations: ["Dentrix", "Open Dental", "Eaglesoft", "Curve Dental", "Weave", "Zapier"]
  },
  {
    slug: "hvac-services",
    title: "HVAC & Climate Control",
    subtitle: "24/7 Emergency Dispatch & Equipment Intake",
    category: "Home Services",
    badge: "EMERGENCY DISPATCH",
    heroHeadline: "Never Miss a No-Cooling or Heat Emergency Call Again",
    heroDesc: "Instantly triage emergency HVAC calls, capture SEER model data, and dispatch straight into ServiceTitan or Housecall Pro.",
    iconType: "hvac",
    overview: "During summer heatwaves or winter freezes, HVAC call volume spikes exponentially. IronLoop handles unlimited concurrent calls, qualifies system diagnostics, and books jobs directly to your technicians.",
    workflows: [
      { step: "01", title: "Emergency Call Capture", desc: "Answers no-cooling/no-heat calls immediately, eliminating lost leads.", icon: "hvac" },
      { step: "02", title: "Diagnostic & Equipment Intake", desc: "Captures unit age, SEER rating, brand, and problem symptoms.", icon: "thermostat" },
      { step: "03", title: "ServiceTitan / CRM Sync", desc: "Pushes job record, customer notes, and zip code to dispatch board.", icon: "move_to_inbox" },
      { step: "04", title: "Tech Dispatch & ETA SMS", desc: "Sends technician arrival window and tracking link to homeowner.", icon: "local_shipping" }
    ],
    features: [
      { title: "Peak Heatwave Scalability", desc: "Handles 1,000+ simultaneous emergency calls with zero degraded response quality.", icon: "bolt" },
      { title: "Diagnostic Pre-Screening", desc: "Asks smart questions (e.g. thermostat power, breaker status) to eliminate false dispatch.", icon: "psychology" },
      { title: "Maintenance Plan Upsell", desc: "Offers annual service agreement sign-ups during routine call scheduling.", icon: "trending_up" },
      { title: "On-Call Tech Routing", desc: "Rotates after-hours dispatch notifications based on technician shift schedules.", icon: "alt_route" }
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
    title: "Plumbing & Urgent Trades",
    subtitle: "Rapid Leak Triage & After-Hours Routing",
    category: "Home Services",
    badge: "RAPID RESPONSE",
    heroHeadline: "Automated Water Leak Triage & Dispatch Execution",
    heroDesc: "Triage urgent pipe bursts, capture property photos via SMS, and route high-value plumbing jobs to on-call technicians.",
    iconType: "plumbing",
    overview: "Water damage worsens every minute. IronLoop provides instant phone triage for late-night leaks, requests property media, and dispatches the closest plumber with full job context.",
    workflows: [
      { step: "01", title: "Leak Emergency Intake", desc: "Identifies main shut-off status and instructs caller to turn off main valve.", icon: "plumbing" },
      { step: "02", title: "SMS Media Request", desc: "Automatically texts caller requesting a photo/video of the leak location.", icon: "add_a_photo" },
      { step: "03", title: "Geo-Proximity Dispatch", desc: "Finds the nearest available technician in the service area.", icon: "near_me" },
      { step: "04", title: "Work Order Sync", desc: "Posts complete job details to dispatch management software.", icon: "receipt_long" }
    ],
    features: [
      { title: "Main Shut-Off Safety Guidance", desc: "Gives caller clear voice instructions on how to shut off main water line while tech travels.", icon: "water_drop" },
      { title: "Instant Photo Intake", desc: "Uses automated SMS link so plumber sees exact pipe condition before arrival.", icon: "camera_alt" },
      { title: "Dispatch Priority Scoring", desc: "Ranks emergency leaks above routine drain cleanings for maximum ROI.", icon: "star" },
      { title: "Automated Job Quoting", desc: "Provides upfront service call fee disclosures and collects agreement.", icon: "gavel" }
    ],
    metrics: [
      { label: "Dispatch Speed", value: "12 Sec", subtext: "From call end to tech notification" },
      { label: "Job Conversion", value: "94%", subtext: "Captured before competitor call" },
      { label: "After-Hours ROI", value: "5.2x", subtext: "High-ticket emergency water jobs" }
    ],
    integrations: ["ServiceTitan", "Housecall Pro", "Jobber", "Workiz", "Zapier", "QuickBooks"]
  },
  {
    slug: "pest-lawn-care",
    title: "Pest & Lawn Care",
    subtitle: "Seasonal Demand Management & Route Cluster Booking",
    category: "Home Services",
    badge: "SEASONAL TRIAGE",
    heroHeadline: "Automate Seasonal Lead Capture & Route Density Booking",
    heroDesc: "Triage urgent pest infestations, schedule recurring lawn treatments by neighborhood clusters, and automate renewals.",
    iconType: "pest",
    overview: "Pest and lawn service demand fluctuates heavily with weather. IronLoop qualifies pest types, books services into high-density geographic routes, and automates annual contract renewals.",
    workflows: [
      { step: "01", title: "Pest / Lawn Inquiry", desc: "AI identifies pest type (termites, rodents, bedbugs) or lawn service needs.", icon: "pest_control" },
      { step: "02", title: "Neighborhood Cluster Check", desc: "Suggests dates when technicians are already in the customer's neighborhood.", icon: "map" },
      { step: "03", title: "Contract Plan Selection", desc: "Presents quarterly protection plans vs one-time treatment options.", icon: "description" },
      { step: "04", title: "Recurring Billing Setup", desc: "Collects payment authorization and schedules recurring service calendar.", icon: "credit_card" }
    ],
    features: [
      { title: "Route Density Optimizer", desc: "Clusters bookings into existing technician routes to minimize driving time.", icon: "route" },
      { title: "Pest Severity Assessment", desc: "Categorizes termite or hornet emergencies for urgent technician dispatch.", icon: "bug_report" },
      { title: "Seasonal Outreach Campaigns", desc: "Automatically reaches out for spring lawn fertilization or fall pest prep.", icon: "grass" },
      { title: "RealGreen / Software Sync", desc: "Integrates natively with industry-leading lawn and pest platforms.", icon: "sync_alt" }
    ],
    metrics: [
      { label: "Route Efficiency", value: "+28%", subtext: "Clustered neighborhood bookings" },
      { label: "Contract Renewal", value: "91%", subtext: "Automated recurring renewal" },
      { label: "Lead Response Time", value: "< 10 Sec", subtext: "Zero missed web/phone inquiries" }
    ],
    integrations: ["RealGreen Systems", "PestRoutes / FieldRoutes", "Workiz", "Jobber", "Zapier"]
  },
  {
    slug: "home-repair-services",
    title: "Home & Repair Services",
    subtitle: "Roofing, Electrical & General Contracting Dispatch",
    category: "Commercial & Trades",
    badge: "ESTIMATE BOOKING",
    heroHeadline: "Instant Estimate Scheduling & Qualification for Contractors",
    heroDesc: "Qualify homeowners, book on-site estimate appointments, and capture project scope for roofing, electrical, and remodeling.",
    iconType: "repair",
    overview: "Contractors lose thousands when prospective clients call 3 competitors at once. IronLoop answers immediately, qualifies budget and timeline, and locks in the estimate appointment before anyone else.",
    workflows: [
      { step: "01", title: "Contractor Inquiry", desc: "AI answers project calls for roofing, electrical, solar, or general repair.", icon: "home_repair_service" },
      { step: "02", title: "Project Scope Qualification", desc: "Asks property ownership, timeline, budget, and project urgency.", icon: "quiz" },
      { step: "03", title: "Estimator Calendar Booking", desc: "Schedules estimator site visit directly into Google/Outlook/CRM calendar.", icon: "event_available" },
      { step: "04", title: "Pre-Visit Confirmation", desc: "Sends text reminder with estimator bio and photo for safety and trust.", icon: "verified" }
    ],
    features: [
      { title: "Instant Lead Lock-in", desc: "Beats competitor response time by booking estimates in seconds.", icon: "speed" },
      { title: "Unqualified Lead Filtering", desc: "Filters out out-of-area calls or low-budget requests based on your criteria.", icon: "filter_alt" },
      { title: "Storm Damage Surge Capture", desc: "Handles huge call spikes after hail or wind storms for roofing companies.", icon: "thunderstorm" },
      { title: "Multi-Trade Routing", desc: "Directs electrical vs plumbing vs carpentry inquiries to respective project leads.", icon: "schema" }
    ],
    metrics: [
      { label: "Estimate Conversion", value: "48%", subtext: "First contractor to book" },
      { label: "Missed Call Rate", value: "0%", subtext: "24/7 lead intake response" },
      { label: "Tech Utilization", value: "92%", subtext: "Optimized estimator calendar" }
    ],
    integrations: ["Jobber", "Salesforce", "AccuLynx", "Contractor Accelerator", "Google Calendar", "HubSpot"]
  },
  {
    slug: "commercial-facility",
    title: "Commercial Facility Ops",
    subtitle: "Multi-Site Incident Ticketing & Vendor Dispatch",
    category: "Commercial & Trades",
    badge: "MULTI-SITE OPS",
    heroHeadline: "Automate Property Work Orders & Multi-Tenant Requests",
    heroDesc: "Classify tenant maintenance requests, issue work order tickets, and dispatch authorized vendors across multi-site portfolios.",
    iconType: "commercial",
    overview: "Facility managers juggle maintenance requests across dozens of properties. IronLoop acts as a 24/7 centralized dispatch hub, categorizing tenant emergencies and alerting pre-approved vendors.",
    workflows: [
      { step: "01", title: "Tenant Request Intake", desc: "AI receives voice or text request from commercial or residential tenant.", icon: "corporate_fare" },
      { step: "02", title: "Priority Classification", desc: "Tags request (HVAC, plumbing, electrical, lock-out) and severity level.", icon: "label" },
      { step: "03", title: "Vendor & Tech Dispatch", desc: "Dispatches approved third-party contractor or in-house maintenance tech.", icon: "engineering" },
      { step: "04", title: "Resolution Tracking", desc: "Monitors vendor acceptance and updates tenant on ETA status.", icon: "task_alt" }
    ],
    features: [
      { title: "Multi-Property Routing", desc: "Identifies property address and tenant account from caller ID automatically.", icon: "domain" },
      { title: "After-Hours Property Guard", desc: "Protects properties from unhandled water or HVAC emergencies overnight.", icon: "shield" },
      { title: "Vendor SLA Enforcement", desc: "Re-routes dispatch if primary vendor does not acknowledge ticket within 15 mins.", icon: "timer" },
      { title: "Facility Portal Sync", desc: "Syncs directly with Yardi, AppFolio, and commercial work order systems.", icon: "sync" }
    ],
    metrics: [
      { label: "Ticket Resolution", value: "2x Faster", subtext: "Automated vendor dispatch" },
      { label: "Tenant Satisfaction", value: "98%", subtext: "Instant response confirmation" },
      { label: "Vendor SLA Speed", value: "< 1 Min", subtext: "Automated dispatch triggers" }
    ],
    integrations: ["Yardi", "AppFolio", "Buildium", "Entrata", "Procore", "Zapier"]
  }
];

export function getIndustryBySlug(slug: string): IndustryDetail | undefined {
  return INDUSTRIES_DATA.find((item) => item.slug === slug);
}
