"use client";

import React from "react";
import { usePrivacy } from "@/components/providers/PrivacyProvider";
import { RiEyeOffLine, RiEyeLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

interface PrivacyToggleProps {
  className?: string;
}

export function PrivacyToggle({ className }: PrivacyToggleProps) {
  const { isPrivacyModeActive, togglePrivacyMode } = usePrivacy();

  return (
    <button
      onClick={togglePrivacyMode}
      className={cn(
        "privacy-mode-toggle flex items-center gap-1 px-2 py-1.5 text-xs rounded-md",
        isPrivacyModeActive
          ? "bg-warning/10 text-warning-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted",
        className
      )}
      title={
        isPrivacyModeActive ? "Disable Privacy Mode" : "Enable Privacy Mode"
      }
    >
      {isPrivacyModeActive ? (
        <RiEyeOffLine className="h-4 w-4" />
      ) : (
        <RiEyeLine className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">
        {isPrivacyModeActive ? "Privacy On" : "Privacy"}
      </span>
    </button>
  );
}
