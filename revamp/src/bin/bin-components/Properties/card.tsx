import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-[var(--color-PRIMEwhite)] rounded-2xl shadow-lg hover:shadow-xl border border-[var(--color-PRIMEgray)] ${className}`}
    >
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return (
    <div
      className={`p-4 sm:p-6 md:p-8 text-[var(--color-PRIMEgray)] ${className}`}
    >
      {children}
    </div>
  );
}
