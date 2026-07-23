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
    badge: "HIPAA COMPLIANT INFRASTRUCTURE",
    heroHeadline: "Enterprise AI Patient Triage & Emergency Call Routing",
    heroDesc: "Deploy medical-grade conversational AI to guarantee zero-wait inbound call handling, encrypted patient intake, and immediate ER escalation.",
    iconType: "hospital",
    overview: "Hospitals manage mission-critical call volumes where every second counts. IronLoop's Autonomous Receptionist serves as your unbreakable first line of defense—intelligently classifying emergencies, capturing encrypted patient demographics, and instantly routing critical cases to on-call physicians with 99.99% uptime.",
    workflows: [
      { step: "01", title: "Inbound Patient Call", desc: "AI answers within 1 ring with natural, empathetic voice response.", icon: "phone_in_talk" },
      { step: "02", title: "HIPAA Triage & Tagging", desc: "Evaluates symptoms and flags ER emergencies vs routine appointment requests.", icon: "health_and_safety" },
      { step: "03", title: "EHR Sync & On-Call Routing", desc: "Updates patient chart in Epic/Cerner and alerts emergency physician on call.", icon: "sync" },
      { step: "04", title: "Automated SMS Followup", desc: "Sends patient arrival instructions and location maps via encrypted SMS.", icon: "sms" }
    ],
    features: [
      { title: "High-Volume Concurrent Reception", desc: "Process thousands of simultaneous patient calls without a single busy signal or hold queue.", icon: "support_agent" },
      { title: "HIPAA Encrypted Data Vault", desc: "All voice telemetry and patient transcripts are secured within an enterprise SOC2 & HIPAA compliant architecture.", icon: "lock" },
      { title: "Critical Escalation Protocols", desc: "Execute immediate warm-transfers to ER charge nurses upon detecting high-risk symptom keywords.", icon: "warning" },
      { title: "Multilingual Patient Access", desc: "Break down barriers with real-time translation across English, Spanish, and 20+ additional languages.", icon: "translate" }
    ],
    metrics: [
      { label: "Call Response Time", value: "< 1 Sec", subtext: "Zero hold time for emergency calls" },
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
    badge: "CLINICAL AUTOMATION",
    heroHeadline: "Streamline Specialty Appointments & Eradicate No-Shows",
    heroDesc: "Modernize your front desk with autonomous scheduling, intelligent pre-screening, predictive appointment reminders, and seamless EHR syncing.",
    iconType: "clinic",
    overview: "Specialty medical clinics face constant front-desk bottlenecks that throttle revenue. IronLoop's AI infrastructure automates complex phone booking procedures, handles routine patient inquiries, and manages waitlist backfills automatically—allowing your staff to focus on in-person care.",
    workflows: [
      { step: "01", title: "Patient Inquiry Intake", desc: "AI answers inquiries, verifies insurance eligibility, and collects reason for visit.", icon: "clinical_notes" },
      { step: "02", title: "Doctor Slot Matching", desc: "Scans provider calendar for specialty availability and reserves optimal appointment.", icon: "calendar_month" },
      { step: "03", title: "Pre-Visit Qualification", desc: "Collects intake forms and pre-op fasting instructions via automated text.", icon: "checklist" },
      { step: "04", title: "Cancellation Recovery", desc: "Automatically contacts waitlisted patients when a slot opens up.", icon: "autorenew" }
    ],
    features: [
      { title: "Intelligent Scheduling Engine", desc: "Enforces clinic-specific booking logic, precise provider availability, and specialized visit lengths.", icon: "edit_calendar" },
      { title: "Predictive No-Show Prevention", desc: "Deploys interactive 2-way SMS cadences for 1-click confirmation, dramatically reducing empty slots.", icon: "notifications_active" },
      { title: "Automated Prescription Routing", desc: "Securely captures pharmacy details and routes refill authorizations directly to nursing queues.", icon: "medication" },
      { title: "Real-Time Insurance Verification", desc: "Validates policy active status and coverage parameters during intake before the patient arrives.", icon: "verified_user" }
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
    badge: "PRACTICE GROWTH ENGINE",
    heroHeadline: "Automate Dental Recalls & 24/7 Emergency Booking",
    heroDesc: "Drive practice revenue by recovering lapsed hygiene patients and securing high-value emergency toothache appointments after hours.",
    iconType: "dental",
    overview: "Unbooked chairs cost dental practices thousands in lost revenue weekly. IronLoop deploys proactive AI-driven hygiene recall campaigns, triages urgent dental pain during off-hours, and seamlessly syncs with your practice management software to keep your schedule fully optimized.",
    workflows: [
      { step: "01", title: "Emergency Pain Triage", desc: "AI assesses severe pain or broken teeth and offers immediate emergency slots.", icon: "emergency" },
      { step: "02", title: "EHR Sync (Dentrix/OpenDental)", desc: "Checks patient history and updates chart notes automatically.", icon: "database" },
      { step: "03", title: "Hygiene Recall Campaign", desc: "Triggers automated outbound voice & SMS for patients due for 6-month checkup.", icon: "campaign" },
      { step: "04", title: "Deposit & Booking Capture", desc: "Secures appointment slot with automated deposit link if required.", icon: "payments" }
    ],
    features: [
      { title: "After-Hours Emergency Intake", desc: "Captures high-value urgent dental calls 24/7 and dispatches the on-call dentist for true emergencies.", icon: "nightlight" },
      { title: "Autonomous Hygiene Reactivation", desc: "Fills empty morning and afternoon hygiene slots by intelligently targeting overdue patients.", icon: "clean_hands" },
      { title: "Synchronized Family Booking", desc: "Enables parents to seamlessly book multiple family members into back-to-back scheduling blocks.", icon: "family_restroom" },
      { title: "Treatment Plan Nurturing", desc: "Follows up on unaccepted treatment plans with tailored, empathetic voice explanations.", icon: "assignment_turned_in" }
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
    heroHeadline: "Never Miss a High-Ticket No-Cooling Emergency Again",
    heroDesc: "Instantly triage emergency HVAC calls, capture SEER model data, and dispatch directly into ServiceTitan with autonomous precision.",
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
    title: "Plumbing & Urgent Trades",
    subtitle: "Rapid Leak Triage & After-Hours Routing",
    category: "Home Services",
    badge: "RAPID RESPONSE AI",
    heroHeadline: "Automated Water Leak Triage & High-Velocity Dispatch",
    heroDesc: "Triage urgent pipe bursts, capture property media via SMS, and route high-value plumbing jobs to on-call technicians instantly.",
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
    slug: "pest-lawn-care",
    title: "Pest & Lawn Care",
    subtitle: "Seasonal Demand Management & Route Cluster Booking",
    category: "Home Services",
    badge: "SEASONAL LOGISTICS",
    heroHeadline: "Automate Seasonal Lead Capture & Route Density Optimization",
    heroDesc: "Triage urgent pest infestations, schedule recurring lawn treatments by geographic clusters, and put annual renewals on autopilot.",
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
  },
  {
    slug: "home-repair-services",
    title: "Home & Repair Services",
    subtitle: "Roofing, Electrical & General Contracting Dispatch",
    category: "Commercial & Trades",
    badge: "ESTIMATE ACCELERATION",
    heroHeadline: "Instant Estimate Scheduling & Qualification for Contractors",
    heroDesc: "Qualify homeowners, book on-site estimate appointments, and capture precise project scope for roofing, electrical, and remodeling.",
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
    slug: "commercial-facility",
    title: "Commercial Facility Ops",
    subtitle: "Multi-Site Incident Ticketing & Vendor Dispatch",
    category: "Commercial & Trades",
    badge: "MULTI-SITE OPERATIONS",
    heroHeadline: "Automate Property Work Orders & Multi-Tenant Requests",
    heroDesc: "Classify tenant maintenance requests, issue work order tickets, and dispatch authorized vendors across complex multi-site portfolios.",
    iconType: "commercial",
    overview: "Facility managers juggle maintenance requests across dozens of properties. IronLoop acts as a 24/7 centralized AI dispatch hub—categorizing tenant emergencies, enforcing SLAs, and alerting pre-approved vendors without human intervention.",
    workflows: [
      { step: "01", title: "Tenant Request Intake", desc: "AI receives voice or text request from commercial or residential tenant.", icon: "corporate_fare" },
      { step: "02", title: "Priority Classification", desc: "Tags request (HVAC, plumbing, electrical, lock-out) and severity level.", icon: "label" },
      { step: "03", title: "Vendor & Tech Dispatch", desc: "Dispatches approved third-party contractor or in-house maintenance tech.", icon: "engineering" },
      { step: "04", title: "Resolution Tracking", desc: "Monitors vendor acceptance and updates tenant on ETA status.", icon: "task_alt" }
    ],
    features: [
      { title: "Multi-Property Routing Logic", desc: "Identifies property address and tenant account from caller ID to route to the correct PM.", icon: "domain" },
      { title: "After-Hours Property Guard", desc: "Protects commercial properties from catastrophic, unhandled water or HVAC emergencies overnight.", icon: "shield" },
      { title: "Vendor SLA Enforcement", desc: "Automatically re-routes dispatch if primary vendor does not acknowledge ticket within 15 mins.", icon: "timer" },
      { title: "Facility Portal Sync", desc: "Syncs directly with Yardi, AppFolio, and enterprise commercial work order systems.", icon: "sync" }
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
