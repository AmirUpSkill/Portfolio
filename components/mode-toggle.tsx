"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center w-10 h-10 bg-transparent">
        <div className="size-[1.5rem] bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        className={cn(
          "relative flex items-center justify-center w-10 h-10 bg-transparent transition-colors duration-200"
        )}
        aria-label="Toggle theme"
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <SunIcon className="size-[1.5rem] text-white" />
        ) : (
          <MoonIcon className="size-[1.5rem] text-gray-700" />
        )}
      </button>
    </div>
  );
};

ModeToggle.displayName = "ModeToggle";