import { useState } from "react";
import StackIcon from "tech-stack-icons";
import { cn } from "@/lib/utils";

/* ---------- data ---------- */
/* ========= SKILLS DATA ========= */
const skills = [
  /* — Languages (Programming) — */
  { name: "Python", icon: "python", category: "languages" },
  { name: "Java", icon: "java", category: "languages" },
  { name: "JavaScript", icon: "js", category: "languages" },
  { name: "C / C++", icon: "c++", category: "languages" },
  { name: "Bash", icon: "bash", category: "languages" },

  /* — Front-end — */
  { name: "HTML", icon: "html5", category: "frontend" },
  { name: "CSS", icon: "css3", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
  { name: "Bootstrap", icon: "bootstrap5", category: "frontend" },
  { name: "React", icon: "react", category: "frontend" },

  /* — Back-end — */
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express.js", icon: "expressjs", category: "backend" },
  { name: "MongoDB", icon: "mongodb", category: "backend" },
  { name: "MySQL", icon: "mysql", category: "backend" },
  { name: "Firebase", icon: "firebase", category: "backend" },

  /* — Tools & Cloud — */
  { name: "Git / GitHub", icon: "git", category: "tools" },
  { name: "Jira", icon: "jira", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "Google Cloud", icon: "gcloud", category: "tools" },
];

/* ========= FILTER TABS ========= */
const categories = ["all", "languages", "frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* filter pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* responsive grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-4 rounded-lg shadow-xs card-hover
                         flex flex-col items-center gap-2"
            >
              {/* icon or fallback initial */}
              {skill.icon ? (
                <StackIcon name={skill.icon} size={30} />
              ) : (
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center">
                  <span className="text-sm font-medium">{skill.name[0]}</span>
                </div>
              )}

              {/* label */}
              <h3 className="text-center text-sm font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
