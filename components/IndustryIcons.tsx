export function getIndustryIconComponent(type: string, className = "w-10 h-10") {
  const iconMap: Record<string, { icon: string; label: string }> = {
    hvac: { icon: "ac_unit", label: "HVAC" },
    plumbing: { icon: "water_drop", label: "Plumbing" },
    repair: { icon: "roofing", label: "Roofing & Contracting" },
    pest: { icon: "pest_control", label: "Pest & Lawn" },
    hospital: { icon: "local_hospital", label: "Healthcare" },
    clinic: { icon: "medical_services", label: "Medical" },
    dental: { icon: "dentistry", label: "Dental" },
    commercial: { icon: "corporate_fare", label: "Commercial" },
  };

  const item = iconMap[type] || { icon: "build", label: "Trade" };

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <span className="material-symbols-outlined text-[#C5E033] text-3xl font-black drop-shadow-[0_0_12px_rgba(197,224,51,0.5)]">
        {item.icon}
      </span>
    </div>
  );
}
