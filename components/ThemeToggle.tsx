"use client";

import { Moon } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <Toggle
      aria-label="Darkmode"
      size="sm"
      variant="outline"
      onPressedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      pressed={theme === "dark"}
    >
      <Moon className="group-data-[state=on]/toggle:fill-foreground h-4 w-4" />{" "}
      DarkMode
    </Toggle>
  );
}
