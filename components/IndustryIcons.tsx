import React from "react";
import Image from "next/image";

interface IconProps {
  className?: string;
  type: string;
}

export function IndustryImageIcon({ type, className = "w-16 h-16" }: IconProps) {
  const iconMap: Record<string, string> = {
    hospital: "/icons/icon_hospital.png",
    clinic: "/icons/icon_clinic.png",
    dental: "/icons/icon_dental.png",
    hvac: "/icons/icon_hvac.png",
    plumbing: "/icons/icon_plumbing.png",
    pest: "/icons/icon_pest.png",
    repair: "/icons/icon_repair.png",
    commercial: "/icons/icon_commercial.png",
  };

  const src = iconMap[type] || "/icons/icon_hospital.png";

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={`${type} icon`}
        width={80}
        height={80}
        className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}

export function getIndustryIconComponent(type: string, className = "w-16 h-16") {
  return <IndustryImageIcon type={type} className={className} />;
}
