import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hover = true,
  glow = false,
}) => {
  return (
    <div
      className={`
        glass-card p-6 transition-all duration-300
        ${hover ? "hover:scale-105 hover:shadow-2xl" : ""}
        ${glow ? "glow-animation" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
