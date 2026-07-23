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
  },
  {
    slug: "ai-estimating-agent",
    name: "AI Estimating Agent",
    shortDesc: "Instant, accurate quotes generated from voice descriptions and photos.",
    heroDesc: "Close deals faster. Our AI Estimating Agent analyzes customer inputs, references your pricing books, and generates professional, accurate proposals in seconds, allowing your sales team to focus on closing rather than calculating.",
    heroIcon: "calculate",
    metrics: [
      { label: "Quote Speed", value: "<10s", subtext: "From request to inbox" },
      { label: "Close Rate", value: "+22%", subtext: "Due to faster response" },
      { label: "Pricing Accuracy", value: "99%", subtext: "Tied to live catalogs" }
    ],
    workflowTitle: "Automated Quoting Pipeline",
    workflowSteps: [
      {
        step: "01",
        title: "Request Intake",
        desc: "Customer describes the issue via voice or text, and uploads photos if necessary.",
        icon: "chat"
      },
      {
        step: "02",
        title: "Context Analysis",
        desc: "AI parses the requirements and matches them against your service catalog and flat-rate book.",
        icon: "troubleshoot"
      },
      {
        step: "03",
        title: "Proposal Generation",
        desc: "A branded, itemized quote is instantly generated with good/better/best options.",
        icon: "request_quote"
      },
      {
        step: "04",
        title: "Approval & Scheduling",
        desc: "Customer approves online, triggering automatic deposit collection and job scheduling.",
        icon: "task_alt"
      }
    ],
    features: [
      {
        title: "Visual AI Analysis",
        desc: "Can identify basic parts or issues from customer-uploaded photos to refine quotes.",
        icon: "image_search"
      },
      {
        title: "Flat-Rate Integration",
        desc: "Directly syncs with your price book to ensure margins are protected on every quote.",
        icon: "price_check"
      },
      {
        title: "Multi-Option Proposals",
        desc: "Automatically builds Good/Better/Best options to increase average ticket size.",
        icon: "view_column"
      },
      {
        title: "Automated Follow-ups",
        desc: "Chases unsold estimates via SMS and Email using personalized messaging.",
        icon: "mark_email_unread"
      }
    ],
    integrations: ["ServiceTitan", "Housecall Pro", "Stripe", "QuickBooks"]
  },
  {
    slug: "automated-retention",
    name: "Automated Retention System",
    shortDesc: "AI-driven post-job follow-ups, review generation, and maintenance upselling.",
    heroDesc: "Turn one-time customers into lifelong clients. This system automatically triggers customized outreach after every job to collect 5-star reviews, resolve silent complaints, and sell recurring maintenance plans without human effort.",
    heroIcon: "campaign",
    metrics: [
      { label: "Review Volume", value: "3x", subtext: "Increase in 5-star reviews" },
      { label: "Maintenance Conversion", value: "18%", subtext: "Automated upsells" },
      { label: "Churn Reduction", value: "-40%", subtext: "Through proactive support" }
    ],
    workflowTitle: "Customer Lifecycle Pipeline",
    workflowSteps: [
      {
        step: "01",
        title: "Job Completion",
        desc: "Technician marks the job complete in your CRM, triggering the retention flow.",
        icon: "fact_check"
      },
      {
        step: "02",
        title: "Sentiment Check",
        desc: "AI sends a quick SMS to gauge satisfaction before requesting a public review.",
        icon: "thumbs_up_down"
      },
      {
        step: "03",
        title: "Review Routing",
        desc: "Happy customers are sent to Google; unhappy customers are routed to a manager.",
        icon: "reviews"
      },
      {
        step: "04",
        title: "Long-term Nurture",
        desc: "System schedules check-ins and maintenance reminders 6-12 months out.",
        icon: "calendar_month"
      }
    ],
    features: [
      {
        title: "Smart Review Gating",
        desc: "Protects your online reputation by privately intercepting negative feedback.",
        icon: "shield"
      },
      {
        title: "Personalized SMS",
        desc: "Uses details from the job notes to make automated texts feel highly personal.",
        icon: "sms"
      },
      {
        title: "Maintenance Upsells",
        desc: "Automatically pitches seasonal tune-ups or club memberships at the perfect time.",
        icon: "sell"
      },
      {
        title: "Reputation Dashboard",
        desc: "Aggregates all reviews and customer sentiment scores into one unified view.",
        icon: "query_stats"
      }
    ],
    integrations: ["Google Business", "Yelp", "ServiceTitan", "HubSpot"]
  },
  {
    slug: "smart-inventory",
    name: "Smart Inventory Manager",
    shortDesc: "Predictive parts ordering and automated warehouse stock management.",
    heroDesc: "Never run out of critical parts. Our Smart Inventory Manager uses historical data and upcoming schedules to predict what you'll need, automatically drafting purchase orders and managing vendor relations.",
    heroIcon: "warehouse",
    metrics: [
      { label: "Stockouts", value: "0", subtext: "Eliminated entirely" },
      { label: "Holding Costs", value: "-25%", subtext: "Optimized stock levels" },
      { label: "Procurement Time", value: "-80%", subtext: "Automated POs" }
    ],
    workflowTitle: "Predictive Restock Pipeline",
    workflowSteps: [
      {
        step: "01",
        title: "Usage Tracking",
        desc: "Technician logs a part used on a job, instantly decrementing virtual stock.",
        icon: "qr_code_scanner"
      },
      {
        step: "02",
        title: "Predictive Analytics",
        desc: "AI analyzes upcoming scheduled jobs and seasonal trends to forecast needs.",
        icon: "timeline"
      },
      {
        step: "03",
        title: "PO Generation",
        desc: "System automatically drafts a Purchase Order for the best vendor when stock is low.",
        icon: "receipt"
      },
      {
        step: "04",
        title: "Vendor Sync",
        desc: "PO is electronically sent to the supplier, and tracking information is logged.",
        icon: "local_shipping"
      }
    ],
    features: [
      {
        title: "Barcode Scanning",
        desc: "Mobile app integration allows technicians to scan parts right from the truck.",
        icon: "qr_code"
      },
      {
        title: "Multi-Vendor Routing",
        desc: "Automatically compares pricing and availability across your approved suppliers.",
        icon: "compare_arrows"
      },
      {
        title: "Seasonality Adjustments",
        desc: "Learns that you need more AC capacitors in July and pre-orders them in May.",
        icon: "thermostat"
      },
      {
        title: "Truck Restock Lists",
        desc: "Generates daily pick-lists so warehouse staff know exactly what to put on each truck.",
        icon: "list_alt"
      }
    ],
    integrations: ["QuickBooks", "ServiceTitan", "Ferguson", "Johnstone Supply"]
  }
];
