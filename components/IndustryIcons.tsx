import React from "react";

interface IconProps {
  className?: string;
}

export function HospitalIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 56V20L32 8L52 20V56H12Z" fill="#1A2016" stroke="#C5E033" strokeWidth="3" strokeLinejoin="round"/>
      <rect x="22" y="26" width="20" height="20" rx="4" fill="#C5E033"/>
      <path d="M32 30V42M26 36H38" stroke="#0B1C0E" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="46" cy="46" r="8" fill="#F8E71C"/>
      <path d="M42 46H50M46 42V50" stroke="#0B1C0E" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="26" y="48" width="12" height="8" fill="#F8E71C" rx="1"/>
    </svg>
  );
}

export function ClinicIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12C20 12 20 28 32 36C44 28 44 12 44 12" stroke="#C5E033" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="20" cy="12" r="5" fill="#F8E71C"/>
      <circle cx="44" cy="12" r="5" fill="#F8E71C"/>
      <path d="M32 36V46" stroke="#C5E033" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="32" cy="52" r="7" fill="#F8E71C" stroke="#C5E033" strokeWidth="2"/>
      <path d="M12 28L18 28M46 28L52 28" stroke="#F8E71C" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function DentalIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 12C14 12 10 18 10 26C10 38 18 42 22 54C24 60 28 58 30 52C31 48 32 44 32 40C32 44 33 48 34 52C36 58 40 60 42 54C46 42 54 38 54 26C54 18 50 12 44 12C38 12 34 16 32 18C30 16 26 12 20 12Z" fill="#C5E033" opacity="0.95"/>
      <path d="M46 14L48 8L50 14L56 16L50 18L48 24L46 18L40 16L46 14Z" fill="#F8E71C"/>
      <circle cx="22" cy="24" r="3" fill="#0B1C0E"/>
    </svg>
  );
}

export function HvacIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="48" height="36" rx="8" fill="#1A2016" stroke="#C5E033" strokeWidth="3"/>
      <circle cx="24" cy="32" r="10" fill="#C5E033"/>
      <path d="M24 22V42M14 32H34" stroke="#0B1C0E" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 24C44 24 46 22 48 22M40 32C45 32 47 30 50 30M40 40C44 40 46 38 48 38" stroke="#F8E71C" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function PlumbingIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 46L36 24L42 30L20 52H14V46Z" fill="#C5E033" stroke="#C5E033" strokeWidth="2"/>
      <path d="M34 22L40 16C42 14 46 14 48 16L50 18C52 20 52 24 50 26L44 32" stroke="#F8E71C" strokeWidth="4" strokeLinecap="round"/>
      <path d="M18 16C18 16 12 24 12 28C12 31.3137 14.6863 34 18 34C21.3137 34 24 31.3137 24 28C24 24 18 16 18 16Z" fill="#F8E71C"/>
    </svg>
  );
}

export function PestIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L50 16V32C50 44 42 52 32 56C22 52 14 44 14 32V16L32 8Z" fill="#1A2016" stroke="#C5E033" strokeWidth="3"/>
      <ellipse cx="32" cy="34" rx="8" ry="10" fill="#C5E033"/>
      <circle cx="32" cy="22" r="5" fill="#F8E71C"/>
      <path d="M22 28L14 26M20 34L12 34M22 40L14 44M42 28L50 26M44 34L52 34M42 40L50 44" stroke="#F8E71C" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function RepairIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 30L32 14L52 30V52H12V30Z" fill="#1A2016" stroke="#C5E033" strokeWidth="3" strokeLinejoin="round"/>
      <path d="M34 24L26 44M24 32L34 32" stroke="#F8E71C" strokeWidth="4" strokeLinecap="round"/>
      <path d="M42 42L48 48" stroke="#C5E033" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="40" cy="40" r="4" fill="#F8E71C"/>
    </svg>
  );
}

export function CommercialIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="24" width="20" height="32" fill="#1A2016" stroke="#C5E033" strokeWidth="3"/>
      <rect x="30" y="12" width="24" height="44" fill="#C5E033" stroke="#C5E033" strokeWidth="2"/>
      <rect x="36" y="18" width="5" height="5" fill="#F8E71C"/>
      <rect x="45" y="18" width="5" height="5" fill="#F8E71C"/>
      <rect x="36" y="28" width="5" height="5" fill="#F8E71C"/>
      <rect x="45" y="28" width="5" height="5" fill="#F8E71C"/>
      <rect x="36" y="38" width="5" height="5" fill="#F8E71C"/>
      <rect x="45" y="38" width="5" height="5" fill="#F8E71C"/>
      <rect x="15" y="30" width="4" height="4" fill="#C5E033"/>
      <rect x="22" y="30" width="4" height="4" fill="#C5E033"/>
      <rect x="15" y="38" width="4" height="4" fill="#C5E033"/>
      <rect x="22" y="38" width="4" height="4" fill="#C5E033"/>
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
