"use client";

import { WorkflowStep } from "@/lib/industriesData";

interface Props {
  industryTitle: string;
  steps: WorkflowStep[];
}

export default function IndustryWorkflowDiagram({ industryTitle, steps }: Props) {
  const lime = "#b4f42c";
  const displaySteps = steps.slice(0, 4);
  const startX = 150;
  const spacing = 233;

  return (
    <div className="relative w-full rounded-2xl border border-white/[0.08] bg-[#09090b] shadow-2xl p-2 overflow-hidden group">
      
      {/* Header */}
      <div className="relative z-10 text-center mt-8 mb-4">
         <span className="font-mono text-[11px] font-bold tracking-widest text-[#a3e635] uppercase mb-2 inline-block">
           {industryTitle}
         </span>
         <h3 className="font-display text-xl lg:text-2xl text-white font-semibold">Autonomous Pipeline Execution</h3>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Unified View (Scales down on mobile) */}
        <div className="w-full">
          <svg className="w-full h-auto transition-transform duration-700" viewBox="0 0 1000 340" style={{ display: 'block' }}>
            <style>
              {`
                @keyframes dashFlow {
                  to { stroke-dashoffset: -24; }
                }
                .animate-flow {
                  animation: dashFlow 1s linear infinite;
                }
                @keyframes pulseGlow {
                  0%, 100% { filter: brightness(1) drop-shadow(0 0 4px #b4f42c); }
                  50% { filter: brightness(1.3) drop-shadow(0 0 12px #b4f42c); }
                }
                .animate-pulse-glow {
                  animation: pulseGlow 2s ease-in-out infinite;
                }
              `}
            </style>
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="circleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#222" />
                <stop offset="100%" stopColor="#050505" />
              </linearGradient>
              <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.06)" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="100%" height="100%" fill="url(#dots)" rx="16" opacity="0.5" />

            {/* Connections */}
            <g stroke={lime} strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.7" className="animate-flow">
              {displaySteps.map((_, i) => {
                if (i === displaySteps.length - 1) return null;
                const x1 = startX + i * spacing;
                const x2 = startX + (i + 1) * spacing;
                return <path key={i} d={`M ${x1} 150 L ${x2} 150`} />;
              })}
            </g>

            {/* Intermediary + Boxes (Like n8n nodes) */}
            {displaySteps.map((_, i) => {
              if (i === displaySteps.length - 1) return null;
              const x = startX + i * spacing + (spacing / 2); // midpoint
              const y = 150;
              return (
                <g key={`plus-${i}`} filter="url(#glow)">
                  <rect x={x - 10} y={y - 10} width="20" height="20" rx="4" fill="#1a1a1a" stroke={lime} strokeWidth="1" />
                  <path d={`M ${x - 5} ${y} L ${x + 5} ${y} M ${x} ${y - 5} L ${x} ${y + 5}`} stroke={lime} strokeWidth="1.5" strokeLinecap="round" />
                </g>
              );
            })}

            {/* Render Nodes */}
            {displaySteps.map((step, i) => {
              const x = startX + i * spacing;
              const y = 150;
              return (
                <g key={i}>
                  {/* Tool text / Step text */}
                  <text x={x} y={y - 75} fill={lime} fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" textAnchor="middle" fontWeight="500">Step {step.step}</text>
                  
                  {/* Diamond */}
                  <polygon points={`${x},${y - 65} ${x + 6},${y - 59} ${x},${y - 53} ${x - 6},${y - 59}`} fill={lime} filter="url(#glow)" className="animate-pulse-glow" />
                  
                  {/* Circle Node Background & Border */}
                  <circle cx={x} cy={y} r="45" fill="url(#circleGrad)" stroke="#333" strokeWidth="1.5" />
                  <circle cx={x} cy={y} r="43" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  <circle cx={x} cy={y} r="45" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="4" opacity="0.5" />

                  {/* Icon */}
                  <text x={x} y={y + 12} fontFamily="Material Symbols Outlined" fontSize="32" fill={lime} textAnchor="middle" filter="url(#glow)" className="animate-pulse-glow">{step.icon}</text>
                  
                  {/* Label */}
                  <text x={x} y={y + 75} fill="#f4f4f5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" textAnchor="middle" fontWeight="600">
                    {step.title.length > 22 ? step.title.substring(0, 22) + "..." : step.title}
                  </text>
                  
                  {/* Description */}
                  <foreignObject x={x - 90} y={y + 85} width="180" height="80">
                     <div xmlns="http://www.w3.org/1999/xhtml" style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", textAlign: "center", lineHeight: "1.4", fontFamily: "system-ui, -apple-system, sans-serif" }}>
                       {step.desc}
                     </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
