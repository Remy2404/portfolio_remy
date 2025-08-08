import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "accent" | "info" | "warning" | "outline";
  size?: "sm" | "md" | "lg";
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const baseClasses =
    "inline-flex items-center font-semibold rounded-full transition-all duration-300";

  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-blue-500 text-white",
    secondary: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    accent: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
    info: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white",
    warning: "bg-gradient-to-r from-orange-400 to-red-500 text-white",
    outline: "border border-white/30 text-white bg-white/10 hover:bg-white/20",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-4 py-3 text-base",
  };

  return (
    <span
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
