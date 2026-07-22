import React from "react";

interface IconProps {
  className?: string;
}

export function HospitalIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Building Base */}
      <path d="M14 54V22L32 10L50 22V54H14Z" fill="#a3e635"/>
      {/* Yellow Roof & Accent Badge */}
      <path d="M32 10L50 22H14L32 10Z" fill="#facc15"/>
      {/* Hospital Cross Center */}
      <rect x="24" y="28" width="16" height="16" rx="3" fill="#0d0f12"/>
      <path d="M32 30V42M26 36H38" stroke="#a3e635" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Door */}
      <rect x="27" y="46" width="10" height="8" fill="#facc15" rx="1"/>
    </svg>
  );
}

export function ClinicIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 12V26C18 33.732 24.268 40 32 40C39.732 40 46 33.732 46 26V12" stroke="#a3e635" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="18" cy="12" r="5" fill="#facc15"/>
      <circle cx="46" cy="12" r="5" fill="#facc15"/>
      <path d="M32 40V48" stroke="#a3e635" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="32" cy="53" r="6" fill="#facc15" stroke="#a3e635" strokeWidth="2"/>
      <path d="M25 24H39" stroke="#facc15" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export function DentalIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12C14 12 10 18 10 26C10 38 18 42 22 54C24 60 28 58 30 52C31 48 32 44 32 40C32 44 33 48 34 52C36 58 40 60 42 54C46 42 54 38 54 26C54 18 50 12 44 12C38 12 34 16 32 18C30 16 26 12 20 12Z" fill="#a3e635"/>
      {/* Yellow Sparkle */}
      <path d="M44 10L46 4L48 10L54 12L48 14L46 20L44 14L38 12L44 10Z" fill="#facc15"/>
    </svg>
  );
}

export function HvacIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="48" height="32" rx="8" fill="#a3e635"/>
      <circle cx="24" cy="32" r="10" fill="#0d0f12"/>
      <path d="M24 24V40M16 32H32" stroke="#a3e635" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 24H48M40 32H50M40 40H46" stroke="#facc15" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

export function PlumbingIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 46L36 24L42 30L20 52H14V46Z" fill="#a3e635"/>
      <path d="M34 22L40 16C42 14 46 14 48 16L50 18C52 20 52 24 50 26L44 32" fill="#facc15"/>
      <path d="M18 14C18 14 10 23 10 28C10 32.4183 13.5817 36 18 36C22.4183 36 26 32.4183 26 28C26 23 18 14 18 14Z" fill="#facc15"/>
    </svg>
  );
}

export function PestIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L50 16V30C50 42 42 50 32 54C22 50 14 42 14 30V16L32 8Z" fill="#a3e635"/>
      <ellipse cx="32" cy="34" rx="7" ry="9" fill="#0d0f12"/>
      <circle cx="32" cy="22" r="5" fill="#facc15"/>
      <path d="M22 28L14 26M20 34L12 34M22 40L14 44M42 28L50 26M44 34L52 34M42 40L50 44" stroke="#facc15" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function RepairIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30L32 12L54 30V52H10V30Z" fill="#a3e635"/>
      <path d="M26 26L38 42M26 42L38 26" stroke="#0d0f12" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="48" cy="18" r="6" fill="#facc15"/>
    </svg>
  );
}

export function CommercialIcon({ className = "w-16 h-16" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="24" width="18" height="32" fill="#a3e635" rx="2"/>
      <rect x="28" y="12" width="26" height="44" fill="#a3e635" rx="2"/>
      <rect x="34" y="18" width="5" height="5" fill="#facc15"/>
      <rect x="43" y="18" width="5" height="5" fill="#facc15"/>
      <rect x="34" y="28" width="5" height="5" fill="#facc15"/>
      <rect x="43" y="28" width="5" height="5" fill="#facc15"/>
      <rect x="34" y="38" width="5" height="5" fill="#facc15"/>
      <rect x="43" y="38" width="5" height="5" fill="#facc15"/>
      <rect x="15" y="30" width="4" height="4" fill="#facc15"/>
      <rect x="21" y="30" width="4" height="4" fill="#facc15"/>
      <rect x="15" y="40" width="4" height="4" fill="#facc15"/>
      <rect x="21" y="40" width="4" height="4" fill="#facc15"/>
    </svg>
  );
}

export function getIndustryIconComponent(type: string, className = "w-16 h-16") {
  switch (type) {
    case "hospital": return <HospitalIcon className={className} />;
    case "clinic": return <ClinicIcon className={className} />;
    case "dental": return <DentalIcon className={className} />;
    case "hvac": return <HvacIcon className={className} />;
    case "plumbing": return <PlumbingIcon className={className} />;
    case "pest": return <PestIcon className={className} />;
    case "repair": return <RepairIcon className={className} />;
    case "commercial": return <CommercialIcon className={className} />;
    default: return <HospitalIcon className={className} />;
  }
}
