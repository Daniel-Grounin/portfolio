import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center" dir="rtl">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} נוצר באהבה על ידי דניאל גרונין.</p>
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" aria-label="חזרה למעלה">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
