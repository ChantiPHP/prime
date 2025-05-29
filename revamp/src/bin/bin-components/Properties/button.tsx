import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
  isLoading?: boolean; // Optional loading state
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  isLoading = false,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-PRIMEblue focus-visible:ring-offset-2";

  const variants = {
    default:
      "bg-PRIMEblue text-PRIMEwhite hover:bg-[#002855] active:bg-[#002855]",
    ghost:
      "bg-transparent text-PRIMEblue border border-PRIMElightgray hover:bg-PRIMEblue hover:text-PRIMEwhite active:bg-PRIMEgray active:text-PRIMEwhite",
  };

  const sizes = {
    default: "px-4 py-2 text-subcontent",
    icon: "p-2",
  };

  const loadingClass = isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${loadingClass} ${className}`}
      disabled={isLoading} // Disable button during loading
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin"></span> // Loading spinner (or replace with an icon)
      ) : (
        props.children
      )}
    </button>
  );
}