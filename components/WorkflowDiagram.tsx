"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

interface N8nWorkflowProps {
  industryTitle: string;
  steps: WorkflowStep[];
}

export default function WorkflowDiagram({ industryTitle, steps }: N8nWorkflowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fallback if steps are missing
  const safeSteps = [
    steps[0] || { title: 'Initial Processing', icon: 'settings', desc: '' },
    steps[1] || { title: 'Secondary Action', icon: 'settings', desc: '' },
    steps[2] || { title: 'Finalize Stage', icon: 'settings', desc: '' },
    steps[3] || { title: 'Wrap Up', icon: 'settings', desc: '' },
  ];

  // N8n style layout nodes
  const nodes = [
    { id: 't1', type: 'trigger', label: 'Inbound Call (Voice)', icon: 'call', color: '#10b981', x: 0, y: 120 },
    { id: 't2', type: 'trigger', label: 'Webform Submit', icon: 'forum', color: '#10b981', x: 0, y: 260 },
    { id: 'c1', type: 'logic', label: 'Parse Payload', icon: 'data_object', color: '#6366f1', x: 260, y: 190 },
    { id: 's1', type: 'logic', label: 'AI Intent Router', icon: 'alt_route', color: '#8b5cf6', x: 520, y: 190 },
    { id: 'a1', type: 'action', label: safeSteps[0].title, icon: safeSteps[0].icon, color: '#a3e635', x: 780, y: 80 },
    { id: 'a2', type: 'action', label: 'Routine Inquiry', icon: 'contact_support', color: '#3b82f6', x: 780, y: 300 },
    { id: 'm1', type: 'action', label: safeSteps[1].title, icon: safeSteps[1].icon, color: '#a3e635', x: 1040, y: 190 },
    { id: 'l1', type: 'logic', label: 'Requires Follow-up?', icon: 'rule', color: '#8b5cf6', x: 1300, y: 190 },
    { id: 'e1', type: 'action', label: 'Archive Record', icon: 'archive', color: '#6b7280', x: 1560, y: 80 },
    { id: 'loop1', type: 'logic', label: 'Action Loop', icon: 'all_inclusive', color: '#8b5cf6', x: 1560, y: 300 },
    { id: 'a3', type: 'action', label: safeSteps[2].title, icon: safeSteps[2].icon, color: '#a3e635', x: 1820, y: 300 },
    { id: 'a4', type: 'action', label: safeSteps[3].title, icon: safeSteps[3].icon, color: '#a3e635', x: 2080, y: 300 },
  ];

  const edges = [
    { from: 't1', to: 'c1', active: true },
    { from: 't2', to: 'c1', active: false },
    { from: 'c1', to: 's1', active: true },
    { from: 's1', to: 'a1', active: true, label: "Urgent" },
    { from: 's1', to: 'a2', active: false, label: "General" },
    { from: 'a1', to: 'm1', active: true },
    { from: 'a2', to: 'm1', active: false },
    { from: 'm1', to: 'l1', active: true },
    { from: 'l1', to: 'e1', active: false, label: "False" },
    { from: 'l1', to: 'loop1', active: true, label: "True" },
    { from: 'loop1', to: 'a3', active: true },
    { from: 'a3', to: 'a4', active: true },
    { from: 'a4', to: 'loop1', isLoop: true, active: true },
  ];

  const getPath = (fromId: string, toId: string, isLoop?: boolean) => {
    const fromNode = nodes.find(n => n.id === fromId);
    const toNode = nodes.find(n => n.id === toId);
    if (!fromNode || !toNode) return "";

    const x1 = fromNode.x + 200; // node width
    const y1 = fromNode.y + 32;  // port y
    const x2 = toNode.x;
    const y2 = toNode.y + 32;

    if (isLoop) {
      const dropY = Math.max(y1, y2) + 90;
      return `M ${x1} ${y1} C ${x1 + 60} ${y1}, ${x1 + 60} ${dropY}, ${x1} ${dropY} L ${x2} ${dropY} C ${x2 - 60} ${dropY}, ${x2 - 60} ${y2}, ${x2} ${y2}`;
    }

    const dx = Math.abs(x2 - x1);
    const curvature = Math.max(40, dx * 0.4);
    return `M ${x1} ${y1} C ${x1 + curvature} ${y1}, ${x2 - curvature} ${y2}, ${x2} ${y2}`;
  };

  // Center scroll on load for mobile
  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      scrollRef.current.scrollLeft = 400;
    }
  }, []);

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3e635] font-bold block mb-3">
          AUTOMATION ARCHITECTURE
        </span>
        <h2 className="font-display text-3xl lg:text-4xl text-white font-extrabold leading-tight">
          How IronLoop Automates <span className="text-[#a3e635]">{industryTitle}</span>
        </h2>
        <p className="font-body text-on-surface-variant mt-4 max-w-xl mx-auto">
          A visual breakdown of the end-to-end processing pipeline, designed specifically for your industry's workflows.
        </p>
      </div>

      {/* Execution Status Bar */}
      <div className="bg-[#111318] border border-white/[0.06] rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a3e635] status-pulse shadow-[0_0_10px_#a3e635]" />
            <span className="font-mono text-xs text-[#a3e635] font-bold uppercase tracking-wider">Workflow Active</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-white/40">memory</span>
            <span className="font-mono text-xs text-white/70">Execution Phase: <span className="text-white font-semibold">Continuous Polling</span></span>
          </div>
        </div>
        <div className="flex items-center gap-2 border border-white/[0.06] bg-[#0b0d10] px-3 py-1.5 rounded-lg">
          <span className="font-mono text-[10px] text-on-surface-variant">Avg Latency:</span>
          <span className="font-mono text-xs text-[#a3e635] font-bold">~1.2s</span>
        </div>
      </div>

      {/* SVG Workflow Canvas Wrapper */}
      <div 
        ref={scrollRef}
        className="relative w-full overflow-x-auto overflow-y-hidden rounded-3xl border border-white/[0.08] bg-[#0a0c10] custom-scrollbar shadow-2xl"
        style={{ cursor: "grab" }}
        onMouseDown={(e) => {
          e.currentTarget.style.cursor = "grabbing";
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.cursor = "grab";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.cursor = "grab";
        }}
      >
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />

        <div className="min-w-[1200px] w-[2350px] p-10">
          <svg viewBox="-20 -20 2300 500" className="w-full h-auto overflow-visible" style={{ filter: "drop-shadow(0 0 20px rgba(0,0,0,0.5))" }}>
            <defs>
              <filter id="glowEdge">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="nodeShadow">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.4"/>
              </filter>
            </defs>

            {/* Edges */}
            {edges.map((edge, i) => {
              const pathId = `edge-${i}`;
              const pathData = getPath(edge.from, edge.to, edge.isLoop);
              
              return (
                <g key={i}>
                  <path
                    id={pathId}
                    d={pathData}
                    fill="none"
                    stroke={edge.active ? "#a3e635" : "rgba(255,255,255,0.1)"}
                    strokeWidth={edge.active ? "2.5" : "1.5"}
                    strokeLinecap="round"
                    style={{ transition: "stroke 0.5s ease" }}
                  />
                  {/* Labels on edges */}
                  {edge.label && (
                    <text 
                      x="0" 
                      y="-8" 
                      fill={edge.active ? "#a3e635" : "rgba(255,255,255,0.3)"} 
                      fontSize="12" 
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
                        {edge.label}
                      </textPath>
                    </text>
                  )}
                  {/* Animated Data Particles */}
                  {edge.active && (
                    <circle r="4" fill="#a3e635" filter="url(#glowEdge)">
                      <animateMotion dur="2.5s" repeatCount="indefinite">
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <g key={i} transform={`translate(${node.x}, ${node.y})`} filter="url(#nodeShadow)">
                {/* Base Node Rect */}
                <rect 
                  width="200" 
                  height="64" 
                  rx="8" 
                  fill="#181a20" 
                  stroke={node.color === '#a3e635' ? "rgba(163,230,53,0.3)" : "rgba(255,255,255,0.08)"} 
                  strokeWidth="1.5" 
                />
                
                {/* Left Color Indicator Block */}
                <path 
                  d="M8 0 h 46 v 64 h -46 a 8 8 0 0 1 -8 -8 v -48 a 8 8 0 0 1 8 -8 z" 
                  fill={node.color} 
                />
                
                {/* Icon */}
                <text 
                  x="27" 
                  y="40" 
                  fontFamily="Material Symbols Outlined" 
                  fontSize="24" 
                  fill={node.color === '#a3e635' || node.color === '#facc15' ? "#0b0d10" : "#ffffff"} 
                  textAnchor="middle"
                >
                  {node.icon}
                </text>
                
                {/* Label Text */}
                <text 
                  x="68" 
                  y="38" 
                  fontFamily="Inter, sans-serif" 
                  fontSize="14" 
                  fill="#ffffff" 
                  fontWeight="600"
                >
                  {node.label.length > 16 ? node.label.substring(0, 16) + '...' : node.label}
                </text>

                {/* Subtitle / Type */}
                <text 
                  x="68" 
                  y="20" 
                  fontFamily="monospace" 
                  fontSize="10" 
                  fill="rgba(255,255,255,0.4)" 
                >
                  {node.type.toUpperCase()}
                </text>

                {/* Status Dot inside node */}
                {node.color === '#a3e635' && (
                  <circle cx="184" cy="32" r="3" fill="#a3e635" filter="url(#glowEdge)">
                     <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}

                {/* Output Port */}
                <circle cx="200" cy="32" r="5" fill="#2d3139" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                
                {/* Input Port */}
                <circle cx="0" cy="32" r="5" fill="#2d3139" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </g>
            ))}
          </svg>
        </div>
        
        {/* Scroll hint gradient for mobile */}
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0c10] to-transparent pointer-events-none lg:hidden" />
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0c10;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
