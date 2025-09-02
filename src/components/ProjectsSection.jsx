import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Jobify – Job Tracker",
    description:
      "Full-stack job tracker with JWT auth, CRUD jobs, filters, charts, and Render deploy.",

    image: "/projects/project4.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://jobify-5f10.onrender.com",
    githubUrl: "https://github.com/Daniel-Grounin/jobify",
  },
  {
    id: 7,
    title: "Should I Move Here",
    description:
      "An interactive web app that helps users evaluate the quality of life in a neighborhood before moving.",

    image: "/projects/should-i-move-here.jpg",
    tags: ["React", "Node.js", "Express", "Leaflet", "Geoapify API", "OpenStreetMap"],
    demoUrl: "https://should-i-move-here-1.onrender.com/",
    githubUrl: "https://github.com/Daniel-Grounin/",
  },
  {
    id: 2,
    title: "Leader Team Business Site",
    description: "Company website for NDT services, built with React and .NET",
    image: "/projects/lt-site-img.jpg",
    tags: ["React", "JS", "C#", ".NET 9", "EF", "SupaBase", "TailwindCSS"],
    demoUrl: "https://lt-site-seven.vercel.app/",
    githubUrl: "https://github.com/Daniel-Grounin/",
  },
  {
    id: 3,
    title: "Drone Surveillance System",
    description:
      "Drone surveillance system designed to revolutionize the way we approach security and monitoring tasks.",
    image: "/projects/project5.jpg",
    tags: ["Python", "Django", "YoloV8", "DJI MSDK"],
    demoUrl: "https://www.youtube.com/watch?v=LXfLGuXEXNU&ab_channel=DanielGrounin",
    githubUrl: "https://github.com/Daniel-Grounin/ZeusVision",
  },
  {
    id: 7,
    title: "Portfolio",
    description: "Personal portfolio website built with React and Vite",
    image: "/projects/portfolio.jpg",
    tags: ["React", "Node.js", "TailwindCSS", "Vercel", "NameCheap domain"],
    demoUrl: "https://www.danielgrounin.com/",
    githubUrl: "https://github.com/Daniel-Grounin/portfolio",
  },
  {
    id: 4,
    title: "IsraCamp",
    description:
      "Full-stack web application where users can discover, create, and review campgrounds.",
    image: "/projects/isracamp1.jpg",
    tags: ["HTML5", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://isracamp.onrender.com/",
    githubUrl: "https://github.com/Daniel-Grounin/IsraCamp",
  },
  {
    id: 5,
    title: "StarLinkEarth",
    description:
      "Interactive real-time visualization project that displays the movement of Starlink satellites around the Earth.",
    image: "/projects/starlink.jpg",
    tags: ["C++", "OpenFrameworks", "Python", "sockets", "json"],
    demoUrl: "https://www.youtube.com/watch?v=qDQ7yQsSQH8&ab_channel=DanielGrounin",
    githubUrl: "https://github.com/Daniel-Grounin/StarLinkEarth",
  },
  {
    id: 6,
    title: "[Mini-Project] Spotify-Desktop-Widget",
    description: "This project is a feature-rich Spotify Music Widget designed for Windows 10.",
    image: "/projects/spotify.jpg",
    tags: ["Python", "PyQt6", "SpotifyAPI"],
    demoUrl: "https://www.youtube.com/watch?v=nKfgezC9OUU&ab_channel=DanielGrounin",
    githubUrl: "https://github.com/Daniel-Grounin/Spotify-Desktop-Widget",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              {/* image block */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* text block */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full
                               bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* footer button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Daniel-Grounin"
            target="_blank"
            rel="noopener noreferrer">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
