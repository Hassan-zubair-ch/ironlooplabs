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

export interface ProductData {
  slug: string;
  name: string;
  shortDesc: string;
  heroDesc: string;
  heroIcon: string;
  metrics: MetricItem[];
  workflowTitle: string;
  workflowSteps: WorkflowStep[];
  features: FeatureItem[];
  integrations: string[];
}

export const productsData: ProductData[] = [
  {
    slug: "ai-voice-agent",
    name: "AI Voice Receptionist",
    shortDesc: "24/7 autonomous call handling, appointment booking, and FAQ resolution.",
    heroDesc: "Never miss a lead. Our AI Voice Agent handles inbound calls instantly, books appointments directly into your calendar, and routes complex inquiries to your on-call staff with zero hold time.",
    heroIcon: "record_voice_over",
    metrics: [
      { label: "Uptime", value: "99.9%", subtext: "Enterprise reliability" },
      { label: "Avg Speed to Answer", value: "<1s", subtext: "Zero hold time" },
      { label: "Call Resolution", value: "85%", subtext: "Without human intervention" }
    ],
    workflowTitle: "Autonomous Call Flow",
    workflowSteps: [
      {
        step: "01",
        title: "Inbound Call",
        desc: "Customer calls your number. The AI answers immediately with a natural, localized voice.",
        icon: "call"
      },
      {
        step: "02",
        title: "Intent Parsing",
        desc: "Natural language processing determines if the caller wants to book, reschedule, or ask a question.",
        icon: "psychology"
      },
      {
        step: "03",
        title: "Action Execution",
        desc: "AI accesses your calendar in real-time, finds slots, and securely books the appointment.",
        icon: "event_available"
      },
      {
        step: "04",
        title: "CRM Sync",
        desc: "Call transcript, summary, and booking details are pushed instantly to your CRM.",
        icon: "cloud_sync"
      }
    ],
    features: [
      {
        title: "Natural Voice Synthesis",
        desc: "Uses state-of-the-art TTS models for highly natural, empathetic conversational dynamics.",
        icon: "spatial_audio_off"
      },
      {
        title: "Smart Call Routing",
        desc: "Escalates emergencies to human dispatchers based on specific keywords and caller sentiment.",
        icon: "alt_route"
      },
      {
        title: "Multilingual Support",
        desc: "Automatically detects and switches languages dynamically to serve diverse customer bases.",
        icon: "translate"
      },
      {
        title: "Post-Call Summaries",
        desc: "Generates bulleted summaries and sentiment scores for every single call.",
        icon: "summarize"
      }
    ],
    integrations: ["ServiceTitan", "Salesforce", "HubSpot", "Twilio"]
  },
  {
    slug: "automated-dispatch",
    name: "Automated Dispatch System",
    shortDesc: "Smart scheduling and intelligent routing for field technicians.",
    heroDesc: "Optimize your field operations. Our Automated Dispatch System calculates the most efficient routes, manages technician availability, and dynamically updates schedules based on emergency priority.",
    heroIcon: "local_shipping",
    metrics: [
      { label: "Route Efficiency", value: "+30%", subtext: "Reduced drive time" },
      { label: "Jobs per Day", value: "+2.5", subtext: "Increased capacity" },
      { label: "Dispatch Errors", value: "0%", subtext: "Algorithmically verified" }
    ],
    workflowTitle: "Intelligent Routing Pipeline",
    workflowSteps: [
      {
        step: "01",
        title: "Job Ingestion",
        desc: "New work order is created via AI Voice Agent or web booking.",
        icon: "assignment"
      },
      {
        step: "02",
        title: "Skill & Geo Matching",
        desc: "System analyzes technician skillsets, current locations, and inventory.",
        icon: "person_search"
      },
      {
        step: "03",
        title: "Dynamic Scheduling",
        desc: "Job is inserted into the optimal slot, instantly recalculating the entire day's route.",
        icon: "calendar_clock"
      },
      {
        step: "04",
        title: "Tech & Client Alerts",
        desc: "Technician receives dispatch details; customer receives \"On the way\" SMS.",
        icon: "sms"
      }
    ],
    features: [
      {
        title: "Geo-Fencing algorithms",
        desc: "Calculates drive times using live traffic data to prevent late arrivals.",
        icon: "map"
      },
      {
        title: "Skill-Based Routing",
        desc: "Ensures only qualified technicians are assigned to complex jobs (e.g., HVAC Level 3).",
        icon: "engineering"
      },
      {
        title: "Emergency Triage",
        desc: "Automatically bumps lower-priority maintenance jobs to accommodate high-revenue emergencies.",
        icon: "emergency"
      },
      {
        title: "Inventory Verification",
        desc: "Checks truck stock against job requirements before final dispatch.",
        icon: "inventory_2"
      }
    ],
    integrations: ["ServiceTitan", "Housecall Pro", "Google Maps", "Fleetmatics"]
  },
  {
    slug: "crm-sync",
    name: "Enterprise CRM Hub",
    shortDesc: "Bi-directional data synchronization across all your tools.",
    heroDesc: "Eliminate data silos. Our Integration Hub acts as the central nervous system for your business, seamlessly passing data between your phone system, CRM, marketing tools, and EHR platforms.",
    heroIcon: "hub",
    metrics: [
      { label: "Data Latency", value: "<50ms", subtext: "Real-time sync" },
      { label: "Data Accuracy", value: "100%", subtext: "No manual entry" },
      { label: "API Uptime", value: "99.99%", subtext: "High availability" }
    ],
    workflowTitle: "Data Synchronization Pipeline",
    workflowSteps: [
      {
        step: "01",
        title: "Webhook Trigger",
        desc: "An event occurs (e.g., call ends, job completed).",
        icon: "webhook"
      },
      {
        step: "02",
        title: "Data Transformation",
        desc: "Payload is mapped and formatted to match the destination schema.",
        icon: "transform"
      },
      {
        step: "03",
        title: "Bi-Directional Push",
        desc: "Data is simultaneously updated in your CRM, billing software, and analytics dashboard.",
        icon: "sync_alt"
      },
      {
        step: "04",
        title: "Validation & Log",
        desc: "System verifies 200 OK status and logs the transaction for compliance.",
        icon: "verified"
      }
    ],
    features: [
      {
        title: "Custom Data Mapping",
        desc: "Visual interface for mapping complex fields between disparate legacy systems.",
        icon: "schema"
      },
      {
        title: "Retry Architecture",
        desc: "Built-in exponential backoff ensures data is never lost if an endpoint goes down.",
        icon: "replay"
      },
      {
        title: "HIPAA Compliant Logging",
        desc: "Maintains immutable audit trails for healthcare data compliance.",
        icon: "admin_panel_settings"
      },
      {
        title: "Webhooks & REST APIs",
        desc: "Open architecture allows your dev team to build custom endpoints easily.",
        icon: "api"
      }
    ],
    integrations: ["Salesforce", "HubSpot", "AthenaHealth", "Epic"]
  }
];
