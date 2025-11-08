import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "קמפיין אינסטגרם ללק גל",
    description: "סדרת פוסטים ורילז עם צילום מקורי, עריכה ומיתוג אחיד שהגדילו את החשיפה וההגעה ללקוחות.",
    image: "/projects/Screenshot_1.jpg",
    tags: ["צילום", "עריכה", "Social Media", "Branding"],
    demoUrl: "https://instagram.com/", // לשים לינק אמיתי
    githubUrl: "#",
  },
  {
    id: 2,
    title: "צילומי מוצר לקוסמטיקה",
    description: "סט צילומי סטודיו עם תאורה רכה ורקע צבעוני, מותאם לפיד אינסטגרם ולסטוריז.",
    image: "/projects/Screenshot_2.jpg",
    tags: ["צילום מוצר", "Lightroom", "Premiere", "תוכן לרשת"],
    demoUrl: "https://instagram.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "מיתוג ויזואלי לעסק קטן",
    description: "בניית שפה ויזואלית מלאה – צבעים, טייפ, תבניות לפוסטים וסגנון צילום.",
    image: "/projects/Screenshot_3.jpg",
    tags: ["Branding", "Photoshop", "Illustrator"],
    demoUrl: "https://instagram.com/",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "תוכן Reels לעסקי בוטיק",
    description: "הפקת סרטונים קצרים, צילום ועריכה בהתאמה לטרנדים באינסטגרם וטיקטוק.",
    image: "/projects/Screenshot_4.jpg",
    tags: ["Video", "Social", "After Effects"],
    demoUrl: "https://instagram.com/",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "צילום לייף סטייל",
    description: "צילום טבעי עם דגש על אווירה, צבע וסיפור – לשימוש ברשתות ובאתר.",
    image: "/projects/Screenshot_5.jpg",
    tags: ["צילום", "עריכה", "Lightroom"],
    demoUrl: "https://instagram.com/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "תבניות תוכן למותג יופי",
    description: "עיצוב סדרת טמפלטים קבועים שמאפשרים לבעלת העסק להמשיך ליצור לבד.",
    image: "/projects/Screenshot_6.jpg",
    tags: ["Canva", "Social Media", "Design System"],
    demoUrl: "https://instagram.com/",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-24 px-4 relative font-hebrew" dir="rtl">
      <div className="container mx-auto max-w-10xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          עבודות <span className="text-primary">נבחרות</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* תגיות */}
                <div className="flex flex-wrap gap-2 mb-4 justify-start">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-right">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-right">{project.description}</p>

                <div className="flex gap-3 justify-start">
                  {/* לינק עבודה */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                  {/* אפשר להשאיר גיטהאב רק אם יש לה קוד/קבצים */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}>
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* כפתור לצפייה בעוד */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer">
            עוד עבודות באינסטגרם
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  );
};

export default ProjectsSection;
