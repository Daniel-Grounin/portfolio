import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle"; // ← add this
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─────────── NAVBAR ─────────── */}
      <nav
        className={cn(
          "fixed inset-x-0 z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* logo */}
          <a
            href="#hero"
            className="text-xl font-bold flex items-center text-primary"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Daniel’s</span>{" "}
              Portfolio
            </span>
          </a>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* right-side controls */}
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              className="md:hidden p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────── MOBILE OVERLAY (sibling) ─────────── */}

      <div
        className={cn(
          "fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
