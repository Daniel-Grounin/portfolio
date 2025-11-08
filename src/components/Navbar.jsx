import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "בית", href: "#hero" },
  { name: "אודות", href: "#about" },
  { name: "כישורים", href: "#skills" },
  { name: "פרויקטים", href: "#projects" },
  { name: "צור קשר", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // הוספת צל בזמן גלילה
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─────────── סרגל ניווט ─────────── */}
      <nav
        dir="rtl"
        className={cn(
          "fixed inset-x-0 z-40 transition-all duration-300 font-hebrew",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
        <div className="container mx-auto flex items-center justify-between">
          {/* לוגו */}
          <a href="#hero" className="text-l md:text-xl font-bold flex items-center text-primary">
            <span className="relative z-10">
              <span className="text-glow text-foreground">אולגה מורוזוב</span> | תיק עבודות
            </span>
          </a>

          {/* קישורי דסקטופ */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-foreground/80 hover:text-primary transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          {/* צד ימין: מצב כהה + תפריט מובייל */}
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              className="md:hidden p-2 text-foreground z-50"
              aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─────────── תפריט מובייל ─────────── */}
      <div
        dir="rtl"
        className={cn(
          "fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
        <div className="flex flex-col space-y-8 text-xl items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
