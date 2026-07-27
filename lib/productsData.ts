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
  moduleNumber?: string;
  tag?: string;
}

export const productsData: ProductData[] = [
  {
    slug: "speed-to-lead",
    moduleNumber: "Module 01",
    name: "Speed-to-Lead Response",
    shortDesc: "Instant SMS & voice response the moment a new lead comes in from any source — ads, web forms, Angi, Meta, or Google.",
    heroDesc: "Instant SMS/voice response the moment a new lead comes in from any source — ads, web forms, Angi, you name it. Never let a hot lead go cold while waiting for a callback.",
    heroIcon: "bolt",
    metrics: [
      { label: "Response Speed", value: "<3 sec", subtext: "Instant multi-channel engagement" },
      { label: "Conversion Lift", value: "9x", subtext: "Compared to 30-min delays" },
      { label: "Lead Capture", value: "100%", subtext: "Zero dropped inquiries" },
    ],
    workflowTitle: "Instant Lead Intake Pipeline",
    workflowSteps: [
      { step: "01", title: "Lead Ingestion", desc: "Form submit, ad click, or incoming call triggers real-time webhook.", icon: "bolt" },
      { step: "02", title: "AI Qualification", desc: "Conversational AI texts/calls immediately asking key intake questions.", icon: "psychology" },
      { step: "03", title: "Live Calendar Booking", desc: "AI checks real-time technician availability and schedules the appointment.", icon: "event_available" },
      { step: "04", title: "CRM Sync & Handoff", desc: "Log details directly in CRM and notify human reps for high-value deals.", icon: "cloud_sync" },
    ],
    features: [
      { title: "Smart Reply Templates", desc: "Dynamic, contextual text and voice replies customized to ad keywords.", icon: "forum" },
      { title: "Qualification Questionnaires", desc: "Filters leads by project type, timeline, and location.", icon: "rule" },
      { title: "Seamless Human Handoff", desc: "Instantly transfers live calls to your sales team if requested.", icon: "phone_forwarded" },
      { title: "Multi-Channel Fallback", desc: "Combines SMS, voice, and email outreach for 100% reach rate.", icon: "phonelink_ring" },
    ],
    integrations: ["Google Ads", "Facebook / Meta", "Angi", "ServiceTitan", "HubSpot"],
  },
  {
    slug: "missed-call-recovery",
    moduleNumber: "Module 02",
    name: "Missed-Call Recovery",
    shortDesc: "If your team can't get to a call, IronLoop AI texts back within seconds and keeps the conversation alive.",
    heroDesc: "Turn missed calls into booked jobs. When your office lines are busy or staff is unavailable, IronLoop AI immediately sends a smart text-back to capture intent and book the appointment before they call a competitor.",
    heroIcon: "phone_missed",
    metrics: [
      { label: "Text-Back Speed", value: "<5 sec", subtext: "Automatic trigger" },
      { label: "Lead Recovery", value: "65%", subtext: "Booked via automated text" },
      { label: "Revenue Saved", value: "$45K/mo", subtext: "Average client recovery" },
    ],
    workflowTitle: "Call Recovery & Booking Flow",
    workflowSteps: [
      { step: "01", title: "Missed Call Signal", desc: "Phone carrier detects unanswered ring or busy line.", icon: "call_end" },
      { step: "02", title: "Instant Auto Text-Back", desc: "AI sends a personalized text asking how we can assist.", icon: "sms" },
      { step: "03", title: "Two-Way AI Chat", desc: "Natural chat gathers service needs and offers calendar slots.", icon: "question_answer" },
      { step: "04", title: "Booking Confirmation", desc: "Appointment is confirmed and dispatch notification is sent.", icon: "task_alt" },
    ],
    features: [
      { title: "Auto Text-Back", desc: "Instant SMS sent the millisecond a call ends without an answer.", icon: "chat_bubble" },
      { title: "Conversation Continuity", desc: "Remembers prior history and customer details across text and voice.", icon: "history" },
      { title: "Booking Completion", desc: "Self-service scheduling links or direct chat-based appointment creation.", icon: "calendar_month" },
      { title: "After-Hours Shift", desc: "Automatically takes over evenings, weekends, and holidays.", icon: "nights_stay" },
    ],
    integrations: ["ServiceTitan", "Jobber", "Housecall Pro", "Twilio"],
  },
  {
    slug: "ai-voice-agent",
    moduleNumber: "Module 03",
    name: "Inbound Voice Agent",
    shortDesc: "A fully conversational AI that answers calls 24/7, handles FAQs, qualifies prospects, and books time on your calendar.",
    heroDesc: "Never miss a lead. Our AI Voice Agent handles inbound calls instantly with natural human tone, answers technical FAQs, books appointments directly into your calendar, and routes urgent calls to on-call staff.",
    heroIcon: "record_voice_over",
    metrics: [
      { label: "Uptime", value: "99.9%", subtext: "Enterprise availability" },
      { label: "Avg Answer Speed", value: "<1s", subtext: "Zero hold time" },
      { label: "Call Resolution", value: "85%", subtext: "Without human intervention" },
    ],
    workflowTitle: "Autonomous Call Intake Pipeline",
    workflowSteps: [
      { step: "01", title: "Inbound Call", desc: "Customer calls. AI answers immediately with localized, natural voice.", icon: "call" },
      { step: "02", title: "Intent Parsing", desc: "NLP determines if caller wants to book, reschedule, or ask a question.", icon: "psychology" },
      { step: "03", title: "Action Execution", desc: "AI accesses live calendar, finds available slots, and books the job.", icon: "event_available" },
      { step: "04", title: "CRM Synchronization", desc: "Call transcript, summary, and audio recording sync instantly to CRM.", icon: "cloud_sync" },
    ],
    features: [
      { title: "Natural Voice Synthesis", desc: "State-of-the-art TTS models for human-like conversational dynamics.", icon: "spatial_audio_off" },
      { title: "Smart Call Routing", desc: "Escalates high-value emergencies to on-call managers immediately.", icon: "alt_route" },
      { title: "Multilingual Support", desc: "Detects and switches languages dynamically to serve all callers.", icon: "translate" },
      { title: "Post-Call Summaries", desc: "Generates bulleted transcripts and sentiment scores for every call.", icon: "summarize" },
    ],
    integrations: ["ServiceTitan", "Salesforce", "HubSpot", "Twilio"],
  },
  {
    slug: "direct-crm-booking",
    moduleNumber: "Module 04",
    name: "Direct CRM Booking",
    shortDesc: "Routes jobs by territory, service type, and real-time technician availability with automated confirmations.",
    heroDesc: "Eliminate manual data entry. Direct CRM Booking algorithmically matches job types with technician skillsets, checks real-time calendar availability, and creates dispatch-ready work orders in your CRM.",
    heroIcon: "calendar_month",
    metrics: [
      { label: "Booking Speed", value: "<10s", subtext: "Real-time dispatch creation" },
      { label: "Schedule Density", value: "+25%", subtext: "Optimized route grouping" },
      { label: "Data Accuracy", value: "100%", subtext: "Direct API writeback" },
    ],
    workflowTitle: "Territory & Calendar Matching Pipeline",
    workflowSteps: [
      { step: "01", title: "Job Intake", desc: "Customer request received via AI agent or web booking widget.", icon: "assignment" },
      { step: "02", title: "Territory & Skill Filter", desc: "System checks zip code, service type, and technician certifications.", icon: "pin_drop" },
      { step: "03", title: "Slot Reservation", desc: "Reserves the optimal time slot without double-booking.", icon: "edit_calendar" },
      { step: "04", title: "Auto Notifications", desc: "Customer receives SMS calendar invite; tech receives dispatch job.", icon: "send font" },
    ],
    features: [
      { title: "Territory Routing", desc: "Groups bookings by geographical zone to reduce drive time.", icon: "map" },
      { title: "Auto Confirmations", desc: "Instant calendar attachments and SMS confirmations.", icon: "mark_email_read" },
      { title: "Reminder Sequences", desc: "Automated 24h and 1h arrival reminders to prevent no-shows.", icon: "alarm" },
      { title: "Real-Time Availability", desc: "Live bi-directional sync with ServiceTitan, Jobber, and Salesforce.", icon: "sync" },
    ],
    integrations: ["ServiceTitan", "Jobber", "Housecall Pro", "Salesforce"],
  },
  {
    slug: "estimate-follow-up",
    moduleNumber: "Module 05",
    name: "Estimate Follow-Up AI",
    shortDesc: "Polite, persistent multi-touch outreach by text, email, and voice until the estimate is closed or rescheduled.",
    heroDesc: "Don't let open quotes sit idle. Our Estimate Follow-Up AI maintains structured multi-channel touchpoints with prospects, answering questions, addressing pricing objections, and closing pending estimates on autopilot.",
    heroIcon: "rate_review",
    metrics: [
      { label: "Quote Close Rate", value: "+28%", subtext: "Increased estimate conversion" },
      { label: "Follow-Up Touchpoints", value: "5-7x", subtext: "Automated cadence" },
      { label: "Sales Time Saved", value: "15 hrs/wk", subtext: "Per estimator" },
    ],
    workflowTitle: "Multi-Touch Nurture Cadence",
    workflowSteps: [
      { step: "01", title: "Quote Creation", desc: "Estimator sends proposal from CRM.", icon: "description" },
      { step: "02", title: "Day 1 Follow-Up", desc: "AI texts 24 hours later asking if the customer reviewed the quote.", icon: "sms" },
      { step: "03", title: "Voice Outreach", desc: "AI places polite call on Day 4 to address questions and offer discounts if configured.", icon: "phone" },
      { step: "04", title: "Closed-Won Trigger", desc: "Customer approves quote online; AI schedules job and updates CRM.", icon: "task_alt" },
    ],
    features: [
      { title: "Multi-Channel Cadence", desc: "Combines text, email, and voice for maximum touchpoint coverage.", icon: "devices" },
      { title: "Persistent Outreach", desc: "Configurable cadences (Day 1, Day 3, Day 7, Day 14) until resolved.", icon: "repeat" },
      { title: "Status Tracking", desc: "Real-time updates in CRM when quotes are viewed, accepted, or declined.", icon: "analytics" },
      { title: "Objection Handling", desc: "AI answers pricing and warranty questions using custom company guidelines.", icon: "forum" },
    ],
    integrations: ["ServiceTitan", "Jobber", "Salesforce", "Stripe"],
  },
  {
    slug: "win-back-campaigns",
    moduleNumber: "Module 06",
    name: "Win-Back Campaigns",
    shortDesc: "Re-engage past customers and cold leads with updated offers, seasonal promotions, and smart re-scheduling.",
    heroDesc: "Reignite dormant pipeline. Win-Back Campaigns automatically segment past customers who haven't booked in 6–12 months, delivering personalized seasonal promotions and maintenance offers via text and voice.",
    heroIcon: "published_with_changes",
    metrics: [
      { label: "Re-Engagement", value: "18%", subtext: "Cold leads reactivated" },
      { label: "Campaign ROI", value: "12x", subtext: "Average return on spend" },
      { label: "Customer LTV", value: "+35%", subtext: "Increased repeat jobs" },
    ],
    workflowTitle: "Re-Activation & Re-Engagement Pipeline",
    workflowSteps: [
      { step: "01", title: "List Segmentation", desc: "Filters CRM for customers with no service history in 180+ days.", icon: "filter_alt" },
      { step: "02", title: "Targeted Offer", desc: "AI constructs personalized SMS offer (e.g., Seasonal Inspection).", icon: "local_offer" },
      { step: "03", title: "Conversational Booking", desc: "AI chats back-and-forth to confirm appointment slot.", icon: "chat" },
      { step: "04", title: "Revenue Recovery", desc: "Completed job turns unbooked database into fresh revenue.", icon: "monetization_on" },
    ],
    features: [
      { title: "Seasonal Promotions", desc: "Triggers pre-summer AC tune-up or pre-winter roof inspection offers.", icon: "thermostat" },
      { title: "Smart Re-Engagement", desc: "Conversational outreach that feels personal and non-spammy.", icon: "mark_chat_unread" },
      { title: "Automated Outreach", desc: "Scheduled drip campaigns executed automatically based on CRM age.", icon: "schedule" },
      { title: "Performance Metrics", desc: "Tracks conversion rate, revenue generated, and ROI per campaign.", icon: "bar_chart" },
    ],
    integrations: ["ServiceTitan", "HubSpot", "Salesforce", "Klaviyo"],
  },
  {
    slug: "reviews-and-referrals",
    moduleNumber: "Module 07",
    name: "Reviews & Referrals AI",
    shortDesc: "Request 5-star reviews at the perfect post-job moment and route negative feedback internally.",
    heroDesc: "Dominate local search rankings. Reviews & Referrals AI texts happy customers immediately after job completion to collect 5-star Google reviews, while privately routing lower ratings to management for instant recovery.",
    heroIcon: "star_rate",
    metrics: [
      { label: "Google Reviews", value: "3.5x", subtext: "Increase in 5-star reviews" },
      { label: "Review Rating", value: "4.9★", subtext: "Average reputation score" },
      { label: "Private Recovery", value: "92%", subtext: "Unhappy customers intercepted" },
    ],
    workflowTitle: "Reputation & Review Loop",
    workflowSteps: [
      { step: "01", title: "Job Complete", desc: "Technician marks job completed in CRM.", icon: "done_all" },
      { step: "02", title: "Sentiment Check", desc: "AI texts customer asking to rate their service on a 1-5 scale.", icon: "thumbs_up_down" },
      { step: "03", title: "Smart Gating", desc: "4-5 stars routed to Google; 1-3 stars routed to internal manager.", icon: "verified" },
      { step: "04", title: "Referral Request", desc: "Reviewers receive automated referral link offering rewards.", icon: "card_giftcard" },
    ],
    features: [
      { title: "Timing Optimization", desc: "Triggers texts within 15 minutes of job completion for max response.", icon: "timer" },
      { title: "Negative Review Gating", desc: "Intercepts bad feedback before it hits public review sites.", icon: "shield" },
      { title: "Referral Engine", desc: "Automates word-of-mouth referral codes and incentive tracking.", icon: "groups" },
      { title: "Reputation Dashboard", desc: "Consolidates Google, Yelp, and Facebook reviews into one view.", icon: "dashboard" },
    ],
    integrations: ["Google Business", "Yelp", "ServiceTitan", "HubSpot"],
  },
  {
    slug: "membership-renewal",
    moduleNumber: "Module 08",
    name: "Membership & Renewal Reminders",
    shortDesc: "Automated outreach for maintenance memberships, annual tune-ups, and recurring service plans.",
    heroDesc: "Maximize recurring revenue. Membership & Renewal Reminders AI automates annual maintenance plan renewals, schedules recurring inspections, and collects recurring payments with zero staff effort.",
    heroIcon: "workspace_premium",
    metrics: [
      { label: "Renewal Rate", value: "88%", subtext: "Automated membership retention" },
      { label: "Predictable MRR", value: "+40%", subtext: "Recurring contract growth" },
      { label: "Admin Work", value: "-90%", subtext: "No manual renewal calls" },
    ],
    workflowTitle: "Recurring Membership Lifecycle",
    workflowSteps: [
      { step: "01", title: "Expiration Trigger", desc: "CRM flags membership expiring in 30 days.", icon: "event_repeat" },
      { step: "02", title: "Multi-Touch Reminder", desc: "AI sends SMS and email outlining member benefits.", icon: "notifications" },
      { step: "03", title: "Auto-Renewal Charge", desc: "Customer clicks or confirms via text to renew and book tune-up.", icon: "credit_card" },
      { step: "04", title: "Schedule Lock", desc: "Maintenance visit is added directly to technician schedule.", icon: "calendar_add_on" },
    ],
    features: [
      { title: "Renewal Automation", desc: "Executes 30, 15, and 7-day automated renewal communications.", icon: "autorenew" },
      { title: "Seasonal Reminders", desc: "Prompts members to schedule spring/fall system inspections.", icon: "today" },
      { title: "Membership Tracking", desc: "Real-time sync of active, lapsed, and pending membership plans.", icon: "assignment_ind" },
      { title: "Payment Integration", desc: "Links directly with Stripe or CRM merchant accounts.", icon: "payments" },
    ],
    integrations: ["ServiceTitan", "Housecall Pro", "Stripe", "Jobber"],
  },
  {
    slug: "smart-lead-qualification",
    moduleNumber: "Module 09",
    name: "Smart Lead Qualification",
    shortDesc: "Custom AI questionnaires that filter leads by job type, location, urgency, and budget before human involvement.",
    heroDesc: "Stop wasting sales time on unqualified leads. Smart Lead Qualification uses dynamic AI dialogs to vet prospects, verify service area compatibility, check budget ranges, and prioritize high-margin work.",
    heroIcon: "fact_check",
    metrics: [
      { label: "Lead Filter Rate", value: "100%", subtext: "Every lead vetted" },
      { label: "Sales Efficiency", value: "+45%", subtext: "Reps focus on qualified buyers" },
      { label: "Unqualified Cost", value: "$0", subtext: "Zero wasted drive time" },
    ],
    workflowTitle: "Intelligent Lead Vetting Pipeline",
    workflowSteps: [
      { step: "01", title: "Inbound Prospect", desc: "Prospect submits form or initiates phone call.", icon: "contact_mail" },
      { step: "02", title: "Dynamic Vetting", desc: "AI asks location, job scope, timeline, and estimated budget.", icon: "checklist" },
      { step: "03", title: "Score & Priority", desc: "High-value commercial or residential jobs are flagged VIP.", icon: "stars" },
      { step: "04", title: "Targeted Routing", desc: "Qualified leads booked immediately; out-of-area leads politely declined.", icon: "alt_route" },
    ],
    features: [
      { title: "Custom Questionnaires", desc: "Tailored intake flows for roofing, solar, HVAC, plumbing, or electrical.", icon: "quiz" },
      { title: "Budget & Scope Filtering", desc: "Ensures projects meet your minimum job value threshold.", icon: "account_balance_wallet" },
      { title: "Priority Scoring", desc: "High-margin or emergency leads bumped to the top of the queue.", icon: "grade" },
      { title: "CRM Tagging", desc: "Tags contacts with budget, urgency, and job requirements in real-time.", icon: "label" },
    ],
    integrations: ["HubSpot", "ServiceTitan", "Salesforce", "Zapier"],
  },
  {
    slug: "lead-source-integration",
    moduleNumber: "Module 10",
    name: "Lead Source Integration Hub",
    shortDesc: "Plug directly into Google Ads, Facebook/Meta, Angi, HomeAdvisor, and lead providers for instant response.",
    heroDesc: "Connect all your ad channels to one central AI brain. Lead Source Integration instantly ingests webhooks from Meta Ads, Google Local Services, Angi, and landing pages to ensure immediate 3-second engagement.",
    heroIcon: "extension",
    metrics: [
      { label: "Integration Latency", value: "<100ms", subtext: "Instant payload ingestion" },
      { label: "Channel Support", value: "50+", subtext: "Ad platforms & lead vendors" },
      { label: "Ad ROI", value: "+32%", subtext: "From speed-to-lead conversion" },
    ],
    workflowTitle: "Unified Lead Channel Pipeline",
    workflowSteps: [
      { step: "01", title: "Ad Click / Lead Event", desc: "User submits lead form on Meta, Google, or Angi.", icon: "touch_app" },
      { step: "02", title: "Payload Ingestion", desc: "IronLoop hub parses lead fields, phone, and source tracking.", icon: "data_object" },
      { step: "03", title: "Immediate AI Outreach", desc: "Triggers Voice/SMS agent in under 3 seconds.", icon: "bolt" },
      { step: "04", title: "Attribution Logging", desc: "Logs source and campaign ROI back to your analytics.", icon: "query_stats" },
    ],
    features: [
      { title: "Google Local Services", desc: "Direct integration with LSA leads and Google Guarantee calls.", icon: "google" },
      { title: "Facebook / Meta Lead Ads", desc: "Instant Webhook ingestion for Instant Forms and Messenger.", icon: "share" },
      { title: "Angi & HomeAdvisor", desc: "Real-time API sync to beat competitors to purchased leads.", icon: "store" },
      { title: "Custom Webhook API", desc: "Open API endpoint to connect custom landing pages and forms.", icon: "code" },
    ],
    integrations: ["Google Ads", "Meta Ads", "Angi", "Zapier"],
  },
  {
    slug: "after-hours-coverage",
    moduleNumber: "Module 11",
    name: "After-Hours AI Coverage",
    shortDesc: "When your office closes, IronLoop AI opens. Capture every evening and weekend lead and have them booked by morning.",
    heroDesc: "Never lose after-hours revenue again. Over 35% of service leads occur outside 9-to-5 business hours. IronLoop AI operates 24/7/365, answering calls, qualifying prospects, and filling your morning schedule while your team sleeps.",
    heroIcon: "dark_mode",
    metrics: [
      { label: "After-Hours Coverage", value: "100%", subtext: "Nights, weekends & holidays" },
      { label: "Morning Bookings", value: "+12/wk", subtext: "Booked overnight" },
      { label: "Reputation Boost", value: "24/7", subtext: "Always-on service" },
    ],
    workflowTitle: "Overnight & Weekend Intake Pipeline",
    workflowSteps: [
      { step: "01", title: "Office Hours End", desc: "Phone line automatically routes to IronLoop AI Coverage.", icon: "schedule font" },
      { step: "02", title: "Overnight Call Handling", desc: "AI answers, qualifies caller, and answers service questions.", icon: "bedtime" },
      { step: "03", title: "Next-Day Booking", desc: "Books appointment directly into tomorrow's open schedule slots.", icon: "event" },
      { step: "04", title: "Morning Briefing", desc: "Office manager receives structured summary email at 7 AM.", icon: "mail" },
    ],
    features: [
      { title: "24/7 Always-On", desc: "Zero downtime during nights, weekends, or national holidays.", icon: "schedule" },
      { title: "Emergency Dispatch Triage", desc: "Alerts on-call technicians for true burst pipes or roof leaks.", icon: "warning" },
      { title: "Morning Digest Reports", desc: "Complete transcript summaries sent to management before opening.", icon: "article" },
      { title: "Automatic Slot Allocation", desc: "Reserves specific morning slots for urgent overnight calls.", icon: "alarm_add" },
    ],
    integrations: ["ServiceTitan", "Jobber", "Housecall Pro", "Twilio"],
  },
  {
    slug: "outbound-pipeline-fill",
    moduleNumber: "Module 12",
    name: "Outbound Pipeline Fill",
    shortDesc: "Slow day? IronLoop AI works through your warm list, calling and texting to fill open crew slots before it's too late.",
    heroDesc: "Keep your crews 100% billable. When schedules show open technician slots for the upcoming days, Outbound Pipeline Fill automatically dials warm prospects and past customers to fill your calendar.",
    heroIcon: "trending_up",
    metrics: [
      { label: "Schedule Density", value: "95%+", subtext: "Capacity utilization" },
      { label: "Slot Fill Speed", value: "<24 hrs", subtext: "To fill open technician days" },
      { label: "Unbilled Overhead", value: "$0", subtext: "Crews stay active" },
    ],
    workflowTitle: "Calendar Gap Fill Pipeline",
    workflowSteps: [
      { step: "01", title: "Gap Detection", desc: "System identifies unbooked technician slots for Thursday/Friday.", icon: "calendar_view_week" },
      { step: "02", title: "Target List Selection", desc: "Selects unbooked estimates or maintenance due contacts.", icon: "contacts" },
      { step: "03", title: "Proactive Dialing", desc: "AI contacts warm list offering priority scheduling incentives.", icon: "phone_in_talk" },
      { step: "04", title: "Schedule Lock", desc: "Fills open slots and updates dispatch board in CRM.", icon: "lock" },
    ],
    features: [
      { title: "Warm List Calling", desc: "Reaches out only to familiar prospects and prior customers.", icon: "contact_phone" },
      { title: "Slot Filling Intelligence", desc: "Targets specific geographical routes to optimize drive times.", icon: "pin_drop" },
      { title: "Proactive Outreach", desc: "Combines conversational phone calls and SMS touchpoints.", icon: "campaign" },
      { title: "Incentive Routing", desc: "Offers dynamic discounts (e.g. $50 off today) to lock in slots.", icon: "local_activity" },
    ],
    integrations: ["ServiceTitan", "Jobber", "Salesforce", "HubSpot"],
  },
  {
    slug: "dead-lead-reactivation",
    moduleNumber: "Module 13",
    name: "Dead Lead Reactivation",
    shortDesc: "Simultaneous 10x concurrent calling to process dormant lead databases and turn forgotten contacts into booked jobs.",
    heroDesc: "IronLoop Signature Module. Upload your dormant lead list from the past 6–12 months. Our AI dials through all of them simultaneously (up to 10 concurrent calls) with personalized outreach — turning cold databases into instant booked jobs.",
    heroIcon: "sync",
    metrics: [
      { label: "Concurrent Calls", value: "10x", subtext: "Simultaneous AI outbound streams" },
      { label: "Database Conversion", value: "15%", subtext: "Dormant leads turned into jobs" },
      { label: "ROI per Campaign", value: "15x-25x", subtext: "Immediate cash injection" },
    ],
    workflowTitle: "High-Volume Reactivation Blitz",
    workflowSteps: [
      { step: "01", title: "Database Upload", desc: "Upload 500-5,000 cold leads from past marketing campaigns.", icon: "cloud_upload" },
      { step: "02", title: "Concurrent Dial Blitz", desc: "10 AI lines call simultaneously using personalized scripts.", icon: "phone_forwarded" },
      { step: "03", title: "Real-Time Qualification", desc: "AI checks current project needs and addresses past objections.", icon: "record_voice_over" },
      { step: "04", title: "Instant Booking", desc: "Interested leads are booked directly onto your calendar.", icon: "event_available" },
    ],
    features: [
      { title: "10x Concurrent Calling", desc: "Processes thousands of leads in hours rather than months.", icon: "alt_route" },
      { title: "Personalized Scripts", desc: "References past estimate quotes, names, and property details.", icon: "edit_note" },
      { title: "CRM Auto-Status Updates", desc: "Updates contact records, opt-outs, and interested buyers.", icon: "sync" },
      { title: "Enterprise Scaling", desc: "Enterprise plans available for 20, 50, or 100+ concurrent channels.", icon: "domain" },
    ],
    integrations: ["ServiceTitan", "Salesforce", "HubSpot", "GoHighLevel"],
  },
];

export const solutionsData = productsData;
