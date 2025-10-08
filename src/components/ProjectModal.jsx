import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn" onClick={onClose}>
      <div
        className="relative bg-card rounded-lg overflow-hidden shadow-lg max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-white hover:text-primary transition">
          <X className="bg-black" size={24} />
        </button>

        <img src={project.image} alt={project.title} className="w-full max-h-[80vh] object-contain" />

        <div className="p-4 text-center">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
