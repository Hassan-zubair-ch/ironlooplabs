import React from 'react';

const MCPServerDiagram = () => {
  const lime = "#b4f42c";
  
  const nodesRow1 = [
    { x: 160, label1: "Call 'Client Lookup'" },
    { x: 320, label1: "Call 'New Client", label2: "CRM'" },
    { x: 480, label1: "Call 'Check", label2: "Availability'" },
    { x: 640, label1: "Call 'Update", label2: "Appointment'" },
  ];

  const nodesRow2 = [
    { x: 240, label1: "Call 'Book Event'" },
    { x: 400, label1: "Call 'Lookup", label2: "Appointment'" },
    { x: 560, label1: "Call 'Delete", label2: "Appointment'" },
  ];

  return (
    <div className="w-full bg-[#09090b] rounded-xl overflow-hidden shadow-2xl relative border border-white/5 group">
      <svg className="w-full h-auto transition-transform duration-700 group-hover:scale-105" viewBox="0 0 800 680" style={{ display: 'block' }}>
        <style>
          {`
            @keyframes dashFlow {
              to {
                stroke-dashoffset: -24;
              }
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
        <rect width="100%" height="100%" fill="url(#dots)" />

        {/* Connections */}
        <g stroke={lime} strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.7" className="animate-flow">
          {/* Main line to Tools */}
          <path d="M 400 125 L 400 155" />
          {/* Line from Tools to + */}
          <path d="M 400 175 L 400 185" />
          
          {/* Lines to Row 1 (y=270) */}
          <path d="M 400 205 C 400 240, 160 230, 160 265" />
          <path d="M 400 205 C 400 240, 320 230, 320 265" />
          <path d="M 400 205 C 400 240, 480 230, 480 265" />
          <path d="M 400 205 C 400 240, 640 230, 640 265" />

          {/* Lines to Row 2 (y=450) */}
          <path d="M 400 205 C 360 250, 240 380, 240 445" />
          <path d="M 400 205 C 400 280, 400 380, 400 445" />
          <path d="M 400 205 C 440 250, 560 380, 560 445" />
        </g>

        {/* Main Box */}
        <g filter="url(#glow)">
          <rect x="250" y="35" width="300" height="90" rx="16" fill="#111" stroke={lime} strokeWidth="1.5" />
        </g>
        
        {/* Logo Coil - Stylized */}
        <g stroke={lime} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" className="animate-pulse-glow">
          <path d="M 285 92 L 298 55 A 6 6 0 0 1 310 59 L 295 92 L 308 55 A 6 6 0 0 1 320 59 L 305 92 L 318 55 A 6 6 0 0 1 330 59 L 320 92 A 8 8 0 0 0 335 102" />
        </g>

        <text x="350" y="70" fill="white" fontFamily="system-ui, -apple-system, sans-serif" fontSize="24" fontWeight="600">MCP Server</text>
        <text x="350" y="100" fill={lime} fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="500" className="animate-pulse-glow">Trigger</text>

        {/* Main Diamond */}
        <polygon points="400,120 406,126 400,132 394,126" fill={lime} filter="url(#glow)" className="animate-pulse-glow" />

        {/* Tools text */}
        <text x="400" y="172" fill={lime} fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" textAnchor="middle" fontWeight="500">Tools</text>

        {/* + Box */}
        <g filter="url(#glow)">
          <rect x="390" y="185" width="20" height="20" rx="4" fill="#1a1a1a" stroke={lime} strokeWidth="1" />
          <path d="M 395 195 L 405 195 M 400 190 L 400 200" stroke={lime} strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Render Nodes */}
        {[...nodesRow1.map(n => ({...n, y: 330})), ...nodesRow2.map(n => ({...n, y: 510}))].map((node, i) => (
          <g key={i}>
            {/* Tool text */}
            <text x={node.x} y={node.y - 75} fill={lime} fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" textAnchor="middle" fontWeight="500">Tool</text>
            
            {/* Diamond */}
            <polygon points={`${node.x},${node.y - 65} ${node.x + 6},${node.y - 59} ${node.x},${node.y - 53} ${node.x - 6},${node.y - 59}`} fill={lime} filter="url(#glow)" />
            
            {/* Circle Node Background & Border */}
            <circle cx={node.x} cy={node.y} r="45" fill="url(#circleGrad)" stroke="#333" strokeWidth="1.5" />
            <circle cx={node.x} cy={node.y} r="43" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <circle cx={node.x} cy={node.y} r="45" fill="none" stroke="rgba(0,0,0,0.8)" strokeWidth="4" opacity="0.5" />

            {/* Inner Symbol (Arrow + Bracket) */}
            <g stroke={lime} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)">
              <path d={`M ${node.x - 12} ${node.y} L ${node.x + 2} ${node.y}`} />
              <path d={`M ${node.x - 3} ${node.y - 6} L ${node.x + 3} ${node.y} L ${node.x - 3} ${node.y + 6}`} />
              <path d={`M ${node.x + 8} ${node.y - 12} L ${node.x + 14} ${node.y - 12} L ${node.x + 14} ${node.y + 12} L ${node.x + 8} ${node.y + 12}`} />
            </g>

            {/* Label */}
            <text x={node.x} y={node.y + 75} fill="#f4f4f5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" textAnchor="middle" fontWeight="500">{node.label1}</text>
            {node.label2 && <text x={node.x} y={node.y + 95} fill="#f4f4f5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" textAnchor="middle" fontWeight="500">{node.label2}</text>}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default MCPServerDiagram;
