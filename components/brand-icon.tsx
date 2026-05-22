import React from "react";
import { SimpleIcon } from "simple-icons";
import { cn } from "@/lib/utils";

interface BrandIconProps {
  icon: SimpleIcon;
  className?: string;
}

export function BrandIcon({ icon, className }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      // fill="currentColor" lets you change the brand icon color dynamically using text- utilities!
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-5", className)}
    >
      {/* Simple Icons provides the exact raw SVG path string in .path */}
      <path d={icon.path} />
    </svg>
  );
}
