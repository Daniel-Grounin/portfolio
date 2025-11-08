import { useState } from "react";
import { cn } from "@/lib/utils";

// מותגים
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiFigma,
  SiCanva,
  SiInstagram,
  SiTiktok,
  SiFacebook,
  SiLinkedin,
} from "react-icons/si";

// צילום / עיצוב
import { TbPhoto, TbPhotoEdit, TbColorSwatch } from "react-icons/tb";

// כללי / עסקי
import { FaChartLine, FaFeatherAlt, FaUserTie, FaFolderOpen } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { LuWorkflow } from "react-icons/lu";

/* ========= SKILLS ========= */
const skills = [
  // — עיצוב גרפי —
  { name: "Adobe Photoshop", icon: SiAdobephotoshop, category: "design" },
  { name: "Adobe Illustrator", icon: SiAdobeillustrator, category: "design" },
  { name: "Adobe InDesign", icon: SiAdobeindesign, category: "design" },
  { name: "Figma", icon: SiFigma, category: "design" },
  { name: "Canva", icon: SiCanva, category: "design" },
  { name: "Color Theory", icon: TbColorSwatch, category: "design" },

  // — צילום ועריכה —
  { name: "Lightroom", icon: SiAdobelightroom, category: "photo-video" },
  { name: "Premiere Pro", icon: SiAdobepremierepro, category: "photo-video" },
  { name: "After Effects", icon: SiAdobeaftereffects, category: "photo-video" },
  { name: "צילום סטודיו", icon: TbPhoto, category: "photo-video" },
  { name: "צילום מוצר", icon: TbPhotoEdit, category: "photo-video" },
  { name: "Video Editing", icon: SiAdobepremierepro, category: "photo-video" },

  // — מדיה חברתית —
  { name: "Instagram", icon: SiInstagram, category: "social" },
  { name: "TikTok", icon: SiTiktok, category: "social" },
  { name: "Facebook", icon: SiFacebook, category: "social" },
  { name: "LinkedIn", icon: SiLinkedin, category: "social" },
  { name: "Social Media Strategy", icon: FaChartLine, category: "social" },

  // — ניהול עסק —
  { name: "Client Relations", icon: FaUserTie, category: "business" },
  { name: "Business Branding", icon: FaFolderOpen, category: "business" },
];

/* ========= FILTERS ========= */
const categories = [
  { label: "הכל", value: "all" },
  { label: "עיצוב", value: "design" },
  { label: "צילום / וידאו", value: "photo-video" },
  { label: "מדיה חברתית", value: "social" },
  { label: "ניהול עסק", value: "business" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" dir="rtl" className="py-24 px-4 relative bg-secondary/30 font-hebrew">
      <div className="container mx-auto max-w-6xl">
        {/* כותרת */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            כלים ו<span className="text-primary">יכולות</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            כל התוכנות והכלים שאני עובדת איתם ביום-יום — מהאדובי ועד לניהול קמפיינים.
          </p>
        </div>

        {/* פילטרים */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-all border",
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-background/40 text-foreground border-transparent hover:bg-background/70"
              )}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* גריד */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mx-auto">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="bg-card/80 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-center transition-transform hover:scale-[1.05]">
              {skill.icon ? (
                <skill.icon className="w-7 h-7 text-primary mb-1" />
              ) : (
                <div className="w-9 h-9 rounded bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">{skill.name[0]}</span>
                </div>
              )}
              <h3 className="text-xs sm:text-sm font-medium leading-tight text-foreground break-words max-w-[95%]">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
