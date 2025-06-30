// src/components/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const getInitialTheme = () => {
  // 1) look for a saved choice
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  }
  // 2) fallback → ALWAYS start dark
  return "dark";
};

const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useState(getInitialTheme); // ← default “dark”

  /* keep <html> class & localStorage in sync */
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={cn(
        "p-2 rounded-full transition-colors duration-300 focus:outline-none",
        className
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
